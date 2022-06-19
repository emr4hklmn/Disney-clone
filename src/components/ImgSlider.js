import styled from 'styled-components';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgSlider() {
    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        slideToShow:1,
        slideToScroll:1,
        autoplay:true
    
    }
  return (
    <Carousel{...settings}>
    <Wrap>
        <img src="./images/slider-1.jpg"/>
    </Wrap>
    <Wrap>
        <img src="./images/slider-2.jpg"/>
    </Wrap>
    <Wrap>
        <img src="./images/slider-3.jpg"/>
    </Wrap>
    <Wrap>
        <img src="./images/slider-4.jpg"/>
    </Wrap>
    <Wrap>
        <img src="./images/slider-5.jpg"/>
    </Wrap>
    <Wrap>
        <img src="./images/slider-6.jpg"/>
    </Wrap>
    <Wrap>
        <img src="./images/slider-7.jpg"/>
    </Wrap>
    <Wrap>
        <img src="./images/slider-8.jpg"/>
    </Wrap>
    <Wrap>
        <img src="./images/slider-9.jpg"/>
    </Wrap>
    <Wrap>
        <img src="./images/slider-10.jpg"/>
    </Wrap>
     
    </Carousel>
  )
}

export default ImgSlider

const Carousel= styled(Slider)`
margin-top:3px;
ul li button{
    &:before{
    font-size:10px;
    color:rgb(150,158,171);
}
}
li.slick-active button:before{
    color:white;
}

.slick-list{
    overflow:visible;
    
}
button{
    z-index: 1;
    
}

;
`
const Wrap=styled.div`

img{
    width: 100%;
    height: 100%;
    border:2px solid transparent;
    border-radius:4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration:all 300ms;

    &:hover{
        border:3px solid rgba(249,249,249,0.8);
    }
}


`;