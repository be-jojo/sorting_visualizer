function updateArray(array, setArray, i, j, t, setStepNumber) {
    setTimeout(
        () => {
            setStepNumber(prev => prev + 1)
            setArray(prev => {
                let newArray = [...prev]
                newArray[i].color = 'red'
                newArray[j].color = 'red'
                if (j - 1 >= 0) newArray[j - 1].color = 'green';
                swap(newArray, i, j);
                return newArray;
            })
        }, t)
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

function insertionSort({
    array,
    delay,
    setArray,
    setStepNumber,
    setSortingSteps,
}) {
    // creating a copy of our array as it is required to perform the comparison in while loop.
    // if i try to compare the values in state array it will not be sorted as the code runs in callstack completed first and then the state will be updating.
    // if correct comparison is not taking place then how can the array be sorted? not possible, as i am using comparison based sort algos.

    // 2. inspite of calling the setTimeout from function i created the new function as it can be reused again. and (i dont know why it creates problem also.)
    let arr = [...array], size = arr.length;
    let time = delay;

    let nArray = [...arr] // dont forgot to create new array here
    setSortingSteps(prev => [...prev, nArray]);
    console.log(array)
    for (let i = 1; i < size; i++) {
        let j = i - 1, idx = i;
        while (j >= 0 && arr[j].number > arr[idx].number) {
            swap(arr, j, idx);
            let newArray = [...arr] // dont forgot to create new array here
            console.log(newArray[idx])
            console.log(newArray[idx])

            if (j - 1 >= 0) newArray[j - 1].color = 'green'
            setSortingSteps(prev => [...prev, newArray]);
            updateArray(array, setArray, j, idx, time, setStepNumber);
            idx = j;
            time += delay;
            j--;
        }
    }
}

export { insertionSort }