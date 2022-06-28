import {useState} from 'react';

function CounterButton() {


    let [labelState, setLabelState] = useState(0);

    function increment() {
        setLabelState(labelState + 1)
    }

    return(
        <button 
        onClick={increment}
        className="btn btn-primary">{labelState}</button>
    )

}

export default CounterButton;