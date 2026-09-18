import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function App() {
  return (
    <MDBFooter color='light' bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='text-white'>Get connected with us on social networks:</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: '20px' }}>
          <a style={{ display: 'flex', justifyContent: 'space-around', marginLeft: '20px' }} href="https://www.twitter.com" className="icon">
            <FaTwitter size={30} color="#1DA1F2" />
          </a>
          <a style={{ display: 'flex', justifyContent: 'space-around', marginLeft: '20px' }} href="https://www.facebook.com" className="icon">
            <FaFacebook size={30} color="#4267B2" />
          </a>
          
          <a style={{ display: 'flex', justifyContent: 'space-around', marginLeft: '20px', marginRight: '20px' }} href="https://www.instagram.com" className="icon">
            <FaInstagram size={30} color="#E1306C" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>
                <MDBIcon color='secondary'  className='me-3' />
                HealMeow
              </h6>
              <p className='text-white'>
                Discover top-notch medical facilities and skilled professionals abroad, all while enjoying a unique travel experience. Your health deserves the best!
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Products</h6>
              <p>
                <a href='/cost-comparison-ai' className='text-white'>
                  Cost Comparison
                </a>
              </p>
              <p>
                <a href='/travel-guide-ai' className='text-white'>
                  Travel Assistance
                </a>
              </p>
              <p>
                <a href='/insurance' className='text-white'>
                  Insurance
                </a>
              </p>
              <p>
                <a href='/visa' className='text-white'>
                  Visa
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Useful links</h6>
              <p>
                <a href='#!' className='text-white'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact</h6>
              {/* Uncomment to add contact details
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
              */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        {/* © 2021 Copyright */}
      </div>
    </MDBFooter>
  );
}
