import React, { useEffect, useState } from 'react';

function PeriodicTable() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await fetch('https://neelpatel05.pythonanywhere.com/periodic_table');
        
        const data = await response.json();
        setElements(data.elements);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchElements();
  }, []);

  return (
    <div>
      <h1>Periodic Table</h1>
      <table>
        <thead>
          <tr>
            <th>Atomic Number</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Atomic Mass</th>
          </tr>
        </thead>
        <tbody>
          {elements.map((element) => (
            <tr key={element.atomicNumber}>
              <td>{element.atomicNumber}</td>
              <td>{element.symbol}</td>
              <td>{element.name}</td>
              <td>{element.atomicMass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeriodicTable;
