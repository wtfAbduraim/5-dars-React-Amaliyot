import "./Button.scss";
import logo from "../Button/image.svg";
import propTypes from "prop-types";

function Button({ text = "click", nimadir = "nimadir", hasICon = false }) {
  return (
    <button className={`button ${nimadir}`}>
      {text}
      {hasICon === true ? (
        <img src={logo} width={20} height={20} alt="logo" />
      ) : null}
    </button>
  );
}

Button.propTypes = {
  text: propTypes.string.isRequired,
  hasICon: propTypes.bool,
};
export default Button;
