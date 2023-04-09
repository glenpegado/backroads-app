import logo from '../images/logo.svg';
import SocialLink from './Body/links/PageLink';
import PageLink from './Body/links/SocialLink';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <SocialLink parentClass='nav-links' iconClass='nav-link' />
        <PageLink parentClass='nav-icons' iconClass='nav-icon' />
      </div>
    </nav>
  );
}
export default Navbar;
