
import { useState } from "react";


export function Text() {
  const [state, setState] = useState(false);
  const toggleTextHandler = (): void => {
    setState(!state);
    };
  return (
    <div className="example">
      <h1>{state}</h1>
      <button onClick={toggleTextHandler}>Toggle Text</button>
        {state ? <div> 'Text' </div> : null}
        {state && <div> 'Text2' </div>}
    </div>
  );
}