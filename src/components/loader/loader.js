const Loader = (props) => {
  const {growing, color} = props;
  const loaderClass = "text-center text-"+color;

  return (
    <div className={loaderClass}>
      <div className={growing?"spinner-grow": "spinner-border"} >        
        <span className="sr-only"></span>
      </div>
    </div>
  )
};

export default Loader;