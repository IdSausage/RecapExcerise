import React, { useState } from "react";

function StateAssignmentOne()
{
    const [count , setCount] = useState(0)
    function AddNumber()
    {
        setCount(count+1)
    }

    return(
        <section>
            <button onClick={AddNumber}>{count}</button>
        </section>
    )
}

export default StateAssignmentOne