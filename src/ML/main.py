import os
import kagglehub
import pandas as pd

from flask import Flask, request, jsonify

from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestRegressor
from flask_cors import CORS
# ==========================================================
# Flask App
# ==========================================================

app = Flask(__name__)
CORS(app)
# ==========================================================
# Download Dataset
# ==========================================================

print("=" * 60)
print("Downloading Healthcare Dataset...")
print("=" * 60)

dataset_path = kagglehub.dataset_download(
    "meeratif/global-healthcare-pricess"
)

print("Dataset Location:")
print(dataset_path)

# ==========================================================
# Find CSV Automatically
# ==========================================================

csv_files = [
    file
    for file in os.listdir(dataset_path)
    if file.endswith(".csv")
]

if len(csv_files) == 0:
    raise Exception("No CSV file found.")

csv_path = os.path.join(
    dataset_path,
    csv_files[0]
)

print("\nUsing Dataset:")
print(csv_path)

# ==========================================================
# Load Dataset
# ==========================================================

df = pd.read_csv(csv_path)

print("\nDataset Loaded Successfully")

print("\nColumns:")
print(df.columns.tolist())

# ==========================================================
# Detect Columns
# ==========================================================

country_col = df.columns[0]
price_col = df.columns[1]

print("\nCountry Column :", country_col)
print("Price Column   :", price_col)

# ==========================================================
# Training Data
# ==========================================================

X = df[[country_col]]

y = df[price_col]

# ==========================================================
# ML Pipeline
# ==========================================================

preprocessor = ColumnTransformer(
    transformers=[
        (
            "country",
            OneHotEncoder(
                handle_unknown="ignore"
            ),
            [country_col],
        )
    ]
)

model = Pipeline(
    steps=[
        (
            "preprocessor",
            preprocessor,
        ),
        (
            "model",
            RandomForestRegressor(
                n_estimators=300,
                random_state=42,
            ),
        ),
    ]
)

print("\nTraining Machine Learning Model...")

model.fit(X, y)

print("Machine Learning Model Ready.")

# ==========================================================
# Home Route
# ==========================================================

@app.route("/")
def home():

    return jsonify(
        {
            "status": "Running",
            "model": "Healthcare Price Comparison AI",
            "algorithm": "Random Forest Regression"
        }
    )

# ==========================================================
# Prediction Route
# ==========================================================

@app.route(
    "/predict",
    methods=["POST"]
)
def predict():

    data = request.get_json()

    if data is None:

        return jsonify(
            {
                "success": False,
                "message": "No JSON received."
            }
        )

    locations = data.get("locations", [])

    if len(locations) == 0:

        return jsonify(
            {
                "success": False,
                "message": "No countries selected."
            }
        )

    print("\nCountries Received:")
    print(locations)

    input_df = pd.DataFrame(
        {
            country_col: locations
        }
    )

    predictions = model.predict(
        input_df
    )

    result = input_df.copy()

    result["Predicted Price Index"] = predictions

    result = result.sort_values(
        by="Predicted Price Index"
    ).reset_index(drop=True)

    best_country = result.iloc[0][country_col]

    best_price = float(
        result.iloc[0]["Predicted Price Index"]
    )

    ranking = []
        # ==========================================================
    # Build Ranking
    # ==========================================================

    for index, row in result.iterrows():

        ranking.append(
            {
                "rank": index + 1,
                "country": row[country_col],
                "price_index": round(
                    float(row["Predicted Price Index"]),
                    2,
                ),
            }
        )

    # ==========================================================
    # AI Recommendation Text
    # ==========================================================

    recommendation = (
        f"{best_country} is the recommended country "
        f"because it has the lowest predicted Healthcare "
        f"Price Index ({best_price:.2f}) among the selected "
        f"locations. Based on the trained Random Forest "
        f"Machine Learning model, it is expected to be the "
        f"most cost-effective healthcare destination."
    )

    # ==========================================================
    # JSON Response
    # ==========================================================

    response = {

        "success": True,

        "recommended_country": best_country,

        "predicted_price_index": round(
            best_price,
            2,
        ),

        "recommendation": recommendation,

        "ranking": ranking,

        "comparison": result.to_dict(
            orient="records"
        ),
    }

    print("\nPrediction Completed.")
    print("Best Country :", best_country)
    print("Price Index  :", best_price)

    return jsonify(response)


# ==========================================================
# Run Server
# ==========================================================

if __name__ == "__main__":

    print("\n" + "=" * 60)
    print("Healthcare Price Comparison API")
    print("=" * 60)
    print("Machine Learning Model : Random Forest")
    print("Backend Status         : Running")
    print("API Endpoint           : http://127.0.0.1:5000/predict")
    print("=" * 60)

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True,
    )