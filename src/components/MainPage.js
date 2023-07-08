import { React, useState } from 'react'
import About from './About'
import axios from 'axios';
import CardTemp from './CardTemp';

function MainPage() {
    const [data, setData] = useState([{}]);
    const [clicked,setClick] = useState(false);
    let idval;
    function handleClick() {
        setClick(true);
        const fetchData = async () => {
            const val = Math.floor(Math.random() * 2) + 1;
            if(val===1) {
              idval = Math.floor(Math.random() * 6) + 1;
            }
            else{
              idval = Math.floor(Math.random() * 6) + 7;
            }


            try {
              const response = await axios.get(`https://reqres.in/api/users?page=${val}`);
              var sourceArray = response.data.data;
              var matchingItem = sourceArray.find(sourceItem => sourceItem.id === idval);
              if (matchingItem) {
                setData(matchingItem);
              }
              // console.log(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
    }
  return (
    <div className="container">
        <div className="main_about">
            <About />
        </div>
        <div className='div_button'>
            <button className="main_button" onClick={handleClick}>Get Details</button>
        </div>
        {
        
        clicked && <div className="main_display"> 
            <CardTemp data={data} />
        </div>

        }
    </div>
  )
}

export default MainPage