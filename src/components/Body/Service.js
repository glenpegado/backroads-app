function Service({ title, text, logo }) {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={logo}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
      </div>
    </article>
  );
}
export default Service;
