import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (

      <div>
<Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.theayres-group.com/wp-content/uploads/2016/06/kozzi-close-up_of_female_hands_on_the_laptop_keyboard-2386x1592.jpg"
            alt="First slide"
          />
          <Carousel.Caption style={{color:"black"}}>
            <h3 style={{marginTop:"-400px",fontSize:"40px",fontFamily:"timesnewroman"}}>Login</h3>
           <p style={{fontSize:"20px"}}> for Student - CR - Admin</p>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/2228821.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Login Issues</h3>
            <hr></hr>
            <p>Contact SFS PORTAL for CRSI Login Issues.For Account credentials refer to Help Desk</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/jaamiah.com/wp-content/uploads/2018/12/CUI-LHR.jpg"
            alt="Third slide"
          />
  
        
        </Carousel.Item>
      </Carousel>


      </div>
    );
  }
  
export default ControlledCarousel;