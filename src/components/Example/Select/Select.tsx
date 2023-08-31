import { useState } from "react";
import { Card } from "../Card/Card";
export function Select(){
    const [state, setState] = useState(false);
    const toggleTextHandler = (): void => {
      setState(!state);
      };
    // return (
    //   <div className="example">
    //     <h1>{state}</h1>
    //     <button onClick={toggleTextHandler}>Toggle Text</button>
    //       {state ? <div> 'Text' </div> : null}
    //       {state && <div> 'Text2' </div>}
    //   </div>
    return(
       <div><Card color="blue"></Card><select><option value="">blue</option><option value="">red</option></select></div>
       
    )
}