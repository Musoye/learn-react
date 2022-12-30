import React, { useState } from 'react';

function Tester(){
    const [color, setColor] = useState("red");
    let name = <section>principle</section>;
    let compare = 2;

    return (
        <div>
             <h1>{compare > 2 ? "mustapha" : "Oyetunde"}</h1>
            {name}
            <h3>Testing state hook</h3>
            <p>this is the first {color}</p>
            <hr />
            <button
            onClick={()=>{setColor("blue")}}>state hook tester</button>
            <br />
        </div>
    )
}

export default Tester
