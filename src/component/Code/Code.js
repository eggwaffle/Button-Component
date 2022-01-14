import './Code.css'

function Code(props) {
  return (
    <div className="Code">
      <p>{`<Button${props.code} />`}</p>
    </div>
  );
}

Code.defaultProps = {
  code: "",
};

export default Code;