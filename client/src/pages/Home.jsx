import React, { useState, useEffect } from 'react';
import "../assets/poduct.css"

const App = () => {
  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://interview-plus.onrender.com/api/items');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        res.status(500)
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 




  return (
    <div className="container mx-auto mt-4 productCard ">
      <div className="row">
        {data.map(item => (
          <div key={item._id} className="col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: '18rem'  }}>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">{item.description}</p>
                <a href="#" className="btn mr-2"><i className="fas fa-link" /> View Product</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default App;

