import { useState } from 'react';
import './Button.css'

function Button(props) {
  const [style, setStyle] = useState(props);
  var startIcon, endIcon = null;
  var classTerm = "";
  var text = "Default";
  if (style.variant !== null) {
    classTerm = [classTerm, style.variant].join(" ");
  }
  if (style.disableShadow === true) {
    classTerm = [classTerm, "disableShadow"].join(" ");
  };
  if (style.disabled === true) {
    classTerm = [classTerm, "disabled"].join(" ");
    text = "Disabled";
  };
  if (style.startIcon !==undefined) {
    classTerm = [classTerm, "startIcon"].join(" ");
    startIcon = style.startIcon;
  }
  if (style.endIcon !==undefined) {
    classTerm = [classTerm, "endIcon"].join(" ");
    endIcon = style.endIcon;
  }
  if (style.size !== null) {
    classTerm = [classTerm, style.size].join(" ");
  }
  if (style.color !== null && style.color !=="default" &&  style.color !=="primary") {
    classTerm = [classTerm, style.color].join(" ")
    text = style.color;
  } else if (style.color ==="default" || style.color ==="primary") {
    classTerm = [classTerm, style.color].join(" ")
  } else if (!style.variant && !style.disableShadow && !style.disabled && !style.startIcon && !style.endIcon && !style.size && !style.color) {
    classTerm = [classTerm, ""].join("");
  } else if (style.disabled) {
    classTerm = [classTerm, ""].join("");
  } else if (style.variant !== null) {
    classTerm = [classTerm, ""].join("");
  } else {
    classTerm = [classTerm, "primary"].join(" ")
  }
  return (
    <div className="Button">
      <button className={`${classTerm}`}>
        <span className="material-icons">{startIcon}</span>
        <p>{text}</p>
        <span className="material-icons">{endIcon}</span>
      </button>
    </div>
  );
}

Button.defaultProps = {
  variant: null,
  disableShadow: false,
  disabled: false,
  size: null,
  color: null
};

export default Button;