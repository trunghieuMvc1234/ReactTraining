import Code from "./Code";
import Welcome from "./Welcome";

export default function () {
  const display = true;
  const isShow = true;
  let message;
  if (display) {
    message = (
      <h2>
        lession 17,8 - Conditional Rendering Using Element Variables - This is
        message 1
      </h2>
    );
  } else {
    message = (
      <h2>
        lession 17,8 - Conditional Rendering Using Element Variables - This is
        message 2
      </h2>
    );
  }
  return isShow ? message : <h2>lession 17,8 -No message</h2>;
}
