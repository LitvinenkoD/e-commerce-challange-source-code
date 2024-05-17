import useDetermineDevice from '../hooks/useDetermineDevice';
import '../scss/Header.scss'

export default function Header() {
  const deviceType = useDetermineDevice()

  return (
    <div className="header">
      <div className="header_wrapper | wrapper">
        <div className="header-container">
          {deviceType == 'mobile' && 
            <img src={process.env.PUBLIC_URL + "/assets/header/hamburger.png"} className='header_hamburger' alt="" />
          }
          <h1 className='header_h1'>WSM</h1>

          {deviceType == 'desktop' && 
            <ul className='header_desktop-menu'>
              <li>Products</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li>Media</li>
              <li>Gallery</li>
            </ul>
          }
        </div>


      </div>
    </div>

  )
}