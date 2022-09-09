import React from 'react';
import Bar from './components/Bar';
import Header from './components/Header';
import StepsInSorting from './components/StepsInSorting';


function App() {
  function createArray(n) {
    let max = 100, min = 1;
    const arr = [];
    for (let i = 0; i < n; i++) {
      let num = Math.floor(Math.random() * max + min);
      arr.push({ id: i, number: num, color: 'green' });
    }
    return arr;
  }
  const [arraySize, setArraySize] = React.useState(15);
  const [array, setArray] = React.useState(createArray(arraySize));

  React.useEffect(function () {
    setArray(createArray(arraySize));
  }, [arraySize]);

  return (
    <div>
      <Header />
      <div>
        <div className='array--container'>
          {array.map(function (item) { return <Bar key={item.id} bar={item} size={arraySize} /> })}
        </div>
        <div></div>
      </div>
      <StepsInSorting
        array={array}
        arraySize={arraySize}
        setArray={setArray}
        setArraySize={setArraySize}
      />
    </div>
  );
}

export default App;
