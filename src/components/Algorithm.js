import React from 'react';
import { insertionSort } from '../algorithms/insertionSort';

export default function Algorithm(props) {
    const [algo, setAlgo] = React.useState('insertion');
    const [play, setPlay] = React.useState(false)

    function executeAlgo() {
        console.log("execute");
        switch (algo) {
            case 'insertion':
                insertionSort({
                    array: props.array,
                    delay: props.delay,
                    setArray: props.setArray,
                    setStepNumber: props.setStepNumber,
                    setSortingSteps: props.setSortingSteps
                });
                break;
            // case 2:
            //     selectionSort({
            //         array: props.array,
            //         delay: props.delay,
            //         setArray: props.setArray,
            //         setStepNumber: props.setStepNumber,
            //         setSortingSteps: props.setSortingSteps
            //     });
            //     break;
            // case 3:
            //     bubbleSort({
            //         array: props.array,
            //         delay: props.delay,
            //         setArray: props.setArray,
            //         setStepNumber: props.setStepNumber,
            //         setSortingSteps: props.setSortingSteps
            //     });
            //     break;
            // case 4:
            //     quickSort({
            //         array: props.array,
            //         delay: props.delay,
            //         setArray: props.setArray,
            //         setStepNumber: props.setStepNumber,
            //         setSortingSteps: props.setSortingSteps
            //     });
            //     break;
            // case 5:
            //     mergeSort({
            //         array: props.array,
            //         delay: props.delay,
            //         setArray: props.setArray,
            //         setStepNumber: props.setStepNumber,
            //         setSortingSteps: props.setSortingSteps
            //     });
            //     break;
            default:
                console.log('some issue with selection box')
        }
    }
    // iterate through the stored sorting steps
    function iterate() {
        console.log("iterate");
        let time = props.delay;
        for (let i = props.stepNumber; i < props.sortingSteps.length; i++) {
            // console.log(props.sortingSteps[i]);
            setTimeout(() => {
                props.setStepNumber(i);
                props.setArray(props.sortingSteps[i]);
            }, time);
            time += props.delay;
        }
    }

    function playOrPause() {
        console.log("click")
        if (!play) {
            console.log("play");

            if (props.sortingSteps.length === 0) {
                executeAlgo();
            }
            else {
                iterate(); // iterate through the array of arrays starts from the  current stepNumber to end
            }
            setPlay(prev => !prev);
        } else {
            console.log("pause");
            setPlay(prev => !prev);
            let id = window.setTimeout(function () { }, 0);
            while (id--) {
                window.clearTimeout(id);
            }
        }
        // can set play here why or why not?
    }

    function resetArray() {
        if (props.sortingSteps.length > 0) {
            props.setArray(props.sortingSteps[0]);
            props.setStepNumber(0);
            props.setSortingSteps([]);
        }
    }

    function prevStep() {
        if (props.stepNumber > 0) {
            props.setStepNumber(prev => prev - 1);
            props.setArray(props.sortingSteps[props.stepNumber - 1])
        }
    }

    function nextStep() {
        if (props.stepNumber < props.sortingSteps.length - 1) {
            props.setStepNumber(prev => prev + 1);
            props.setArray(props.sortingSteps[props.stepNumber + 1])
        }
    }

    function changeAlgo(e) {
        setAlgo(e.target.value)
        props.setStepNumber(0)
        props.setSortingSteps([])
        executeAlgo();
    }

    return (
        <div className='algo--container'>
            <div className='select-algo'>
                <select
                    className='select'
                    // disabled={analyzeTimeWithArraysize}
                    value={algo}
                    onChange={changeAlgo}
                >
                    <option value={'insertion'}>Insertion Sort</option>
                    <option value={'selection'}>Selection Sort</option>
                    <option value={'bubble'}>Bubble Sort</option>
                    <option value={'quick'}>Quick Sort</option>
                    <option value={'merge'}>Merge Sort</option>
                </select>
            </div>
            <div className='player'>
                <button className='icon-btn' onClick={() => resetArray()}>reset</button>
                <button className='icon-btn' onClick={() => prevStep()}>prev</button>
                <button className='icon-btn' onClick={() => playOrPause()}>play/pause</button>
                <button className='icon-btn' onClick={() => nextStep()}>next</button>
            </div>
        </div>
    );
}