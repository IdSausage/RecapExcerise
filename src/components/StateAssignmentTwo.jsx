import React ,  {useState, usestate} from "react";

function StateAssignmentTwo()
{
    const[numbers , setNumbers] = useState([]);

    function HandlerClick()
    {
        setNumbers([...numbers , Math.floor(Math.random()*10)]);
    }

    return(
        <section>
            <button onClick={HandlerClick}>Click me</button>
            {numbers.map(numbers => (
                <li>{numbers}</li>
            ))}
        </section>
    )
}

export default StateAssignmentTwo