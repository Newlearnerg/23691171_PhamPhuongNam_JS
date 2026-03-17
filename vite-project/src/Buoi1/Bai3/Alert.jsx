import PropTypes from "prop-types";

function Alert({ message = "This is an alert message", type = "info" }) {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(["info", "success", "warning", "danger"])
};

export default Alert;