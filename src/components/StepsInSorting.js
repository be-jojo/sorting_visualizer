import React from 'react';

import Algorithm from './Algorithm';


export default function StepsInSorting(props) {
    const [stepNumber, setStepNumber] = React.useState(0);
    const [sortingSteps, setSortingSteps] = React.useState([]);
    const [delay, setDelay] = React.useState(100);

    function changeStep(e) {
        setStepNumber(parseInt(e.target.value)); // remember we have to update this as slider is now managed by react state. so have to update state
        props.setArray(sortingSteps[e.target.value]);
    }

    function changeSize(e) {
        props.setArraySize(parseInt(e.target.value));
        setStepNumber(0);
        setSortingSteps([]); // problem how to add new array in this array of arrays.
    }

    return (
        <div className='container'>
            <div className='slider--container'>
                <label htmlFor='sorting steps'>sorting steps</label>
                <input
                    className='slider'
                    type="range"
                    value={stepNumber}
                    name="sorting steps"
                    step={1}
                    max={sortingSteps.length - 1}
                    onChange={changeStep}
                ></input>
                <label htmlFor='delay'>Dealy</label>
                <input
                    className='slider'
                    type="range"
                    value={delay}
                    name="delay"
                    step={100}
                    min={10}
                    max={1010}
                    onChange={(e) => setDelay(parseInt(e.target.value))}
                ></input>
                <label htmlFor='array size'>Array Size</label>
                <input
                    className='slider'
                    type="range"
                    value={props.arraySize}
                    name="array size"
                    step={1}
                    min={5}
                    max={100}
                    onChange={changeSize}
                ></input>
            </div>

            <Algorithm
                array={props.array}
                delay={delay}
                stepNumber={stepNumber}
                sortingSteps={sortingSteps}
                setArray={props.setArray}
                setStepNumber={setStepNumber}
                setSortingSteps={setSortingSteps}
            />
        </div>
    );
}