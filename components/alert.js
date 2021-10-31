export const Alert = (props) => {
  const { type, message } = props;
  return (
    type &&
    message && (
      <div
        className={`position-fixed top-0 start-50 translate-middle-x alert alert-${type}`}
        role="alert"
        style={{ zIndex: 9999 }}
      >
        {message}
      </div>
    )
  );
};
