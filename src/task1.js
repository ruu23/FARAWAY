
import React, { useState } from 'react';

const Task1 = () => {
    const [active, setActive] = useState(0);
    const [show, setShow] = useState(true);
    const [data, setData] = useState(["one", "two", "three"]);
    const [name, setName] = useState("");

    function handelDelete(index){
      let newArray = data.filter((el, id) => {
        return id !== index;
      });
      setData(newArray)
    }
    return (
        <div>
            <button onClick={() => setShow(!show)}>toggle</button>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setData([...data, "four"])}>add value</button>
            {show ? (
                <div>
                    {data.map((el, index) => (
                        <h2
                            key={index}
                            className={active === index ? "applystyle" : ""}
                            onClick={() => setActive(index)}
                        >
                            {el}
                        </h2>
                    ))}
                </div>
            ) : null}
            <button onClick={handelDelete}>X</button>
        </div>
    );
};

export default Task1;