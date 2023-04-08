import { pageLinks } from '../../../data';

function PageLink({ parentClass, iconClass }) {
  return (
    <ul className={parentClass}>
      {pageLinks.map((el) => {
        const { href, id, text } = el;
        return (
          <li key={id}>
            <a href={href} className={iconClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default PageLink;
