import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from MongoDB:</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;