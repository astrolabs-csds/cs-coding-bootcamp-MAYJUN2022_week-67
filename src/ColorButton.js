import {useState} from 'react';

function ColorButton(props) {


    const [colorState, setColorState] = useState("btn-primary");


    function changeColor() {
        setColorState("btn-danger")
    }

    return (
        <button 
        onClick={changeColor}
        className={`btn ${colorState}`}>{props.children}</button>
    )   
}

export default ColorButton;