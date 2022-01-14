import Button from '../Button/Button';
import Code from '../Code/Code'
import './Item.css'

function Item(props) {
  var addedcode = " ";
  var disableShadow = false;
  var disabled = false;
  if (props.variant !== undefined) {
    addedcode = [addedcode, `variant="${props.variant}"`].join(" ");
  };
  if (props.disableShadow) {
    addedcode = [addedcode, "disableShadow"].join(" ");
    disableShadow = true;
  };
  if (props.disabled) {
    addedcode = [addedcode, "disabled"].join(" ");
    disabled = true;
  };
  if (props.startIcon !==undefined) {
    addedcode = [addedcode, ` startIcon="${props.startIcon}"`].join( " ");
  };
  if (props.endIcon !==undefined) {
    addedcode = [addedcode, ` endIcon="${props.endIcon}"`].join( " ");
  };
  if (props.size !== undefined) {
    addedcode = [addedcode, ` size="${props.size}"`].join(" ");
  };
  if (props.color !== undefined) {
    addedcode = [addedcode, ` color="${props.color}"`].join(" ");
  };
  return (
    <div className="Item">
      <Code code={addedcode} />
      <Button variant={props.variant} disableShadow={disableShadow} disabled={disabled} startIcon={props.startIcon} endIcon={props.endIcon} size={props.size} color={props.color} />
    </div>
  );
}

export default Item;