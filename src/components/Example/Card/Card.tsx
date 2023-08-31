import "./Card.css"
interface props{
    color:"red"|"blue"
}
export function Card(props:props){
    return(
        <div
        className={`Card  ${
          props.color === "red" ? "red" :"blue"
        }   `}>
        <h1>exresice 2</h1>
        <img id="img" src="https://www.kron4.com/wp-content/uploads/sites/11/2022/09/GettyImages-1310564713-1.jpg?w=2560&h=1440&crop=1"></img>
        <h3>geting used to it</h3>
    </div>)
}