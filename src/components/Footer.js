import SocialLink from './Body/links/SocialLink';
import PageLink from './Body/links/PageLink';
function Footer() {
  return (
    <footer className='section footer'>
      <SocialLink parentClass='footer-links' iconClass='footer-link' />
      <PageLink parentClass='footer-links' iconClass='footer-link' />

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}
export default Footer;
