import logo from 'assets/logo.svg';
import { AiFillBell } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import './styles.scss';

const Header = () => {
  return (
    <header id="app-header">
      <div className="section-wrapper">
        <img src={logo} className='app-logo' alt="logo" />
        <div className="app-header-actions">
          <button className='header-button'><AiFillBell /></button>
          <button className='header-button'><IoMdSettings /></button>
        </div>
      </div>
    </header>
  )
}

export default Header
