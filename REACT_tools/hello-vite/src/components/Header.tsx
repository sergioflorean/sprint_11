import headerLogo from '../assets/logo.png'
import './Header.css'



function Header() {



  return (
    <div className="header">
      <img className='header__logo' src={headerLogo} alt="Logo" />
      <h1 className='header__title'>HolaVite!</h1>
    </div>
  )
}

export default Header