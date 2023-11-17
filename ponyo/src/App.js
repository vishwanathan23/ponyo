import ComposedTextField from "./Components/Form";
import ControlledCheckbox from "./Components/Checkbox";
import Navbar from "./Components/Navbar";

export default function My() {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hello"
        height="300px"
        width="1800px"
      ></img>
      <Navbar />
      <center>
        <ComposedTextField />
        <ControlledCheckbox />
      </center>
      <img
        src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hello"
        height="300px"
        width="1800px"
      ></img>
    </>
  );
}
