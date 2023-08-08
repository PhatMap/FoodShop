import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Food from './Food'

const Home = () => {
    const [values, setValues] = useState([])

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await axios.post('http://localhost:8080/');
          console.log(response.data)
          setValues(response.data); // Lưu trữ dữ liệu vào state
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
    return (
        <div className='food-list header'>
            {values.map((food) => (<Food key={food.id} name={food.name} price={food.price} image={food.image}></Food>))}
        </div>
    )
}

export default Home