import { useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";
import "./App.scss";
const App = () => {
  const testRef = useRef(null);

  useClickOutside(testRef, () => {
    console.log("outside of test element clicked!");
  });

  return (
    <>
      <div ref={testRef} className="test">
        React App
      </div>
    </>
  );
};

export default App;
