import { useState } from "react";
import { Card } from "../Card/Card";
 export const Select = ({ onSelectColor }:any) => {
    const colorOptions = [
        { value: '', label: 'Default' },
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
        { value: 'purple', label: 'Purple' },
        { value: 'custom', label: 'Add Custom Color' },
      ];
      const [color,changeColor]=useState<string>()
      const handleColorChange = (event:any) => {
          const selectedColor = event.target.value;
          useState(selectedColor);      
    return(
       <div><Card color={onSelectColor}></Card> <select onChange={handleColorChange}>
       {colorOptions.map((option) => (
         <option key={option.value} value={option.value}>
           {option.label}
         </option>
       ))}
     </select>
       </div>
    )
}
 }