const withClickHandler = (WrappedComponent) => (props) => {

  const handleClick = () => {
    alert("Welcome from HOC ");
  };

  return <WrappedComponent handleClick={handleClick} {...props} />;
};

export default withClickHandler;