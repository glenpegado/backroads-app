import { socialLinks } from '../../../data';

function SocialLink({ parentClass, iconClass }) {
  return (
    <ul className={parentClass}>
      {socialLinks.map((el) => {
        const { id, href, target, icon } = el;
        return (
          <li key={id}>
            <a href={href} target={target} className={iconClass}>
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default SocialLink;
