import PropTypes from "prop-types";
import "./Button.css";

function Button({
    text = "Click me",
    variant = "primary",
    size = "md",
    rounded = false,
    onClick
}) {
    const classes = `btn btn--${variant} btn--${size} ${rounded ? "btn--rounded" : ""}`;
    return (<button className={classes} onClick={onClick}>{text}</button>);
}
Button.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    rounded: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button;