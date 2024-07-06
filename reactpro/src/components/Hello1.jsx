const name = "Rob";

function displayMessage() {
  return "Wow";
}

function Hello(props) {
  const { name, message } = props;
  return (
    <div>
      <h2>
        lession 8 - example jsx {name} {displayMessage()}
      </h2>
      <h2>
        lession 9 -example props{props.message} {props.name}
      </h2>
      <h2>
        lession 10 - example desctructure {message} {name}
      </h2>
      <h2>
        lession 11 - Immutability of Props: can not assign props.name to new
        value
      </h2>
    </div>
  );
}

export default Hello;
