import React from 'react'
import styled from 'styled-components'
function Movies() {
  return (
    <Container>
    <h4>Recommended For you</h4>
    <Content>
    <Wrap>
    <img src="/images/slider-scale.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-badging.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-badag.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-scales.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-1.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-2.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-badag.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-3.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-4.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-5.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-6.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-7.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-8.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-9.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-10.jpg"/>
    </Wrap>
    <Wrap>
    <img src="/images/slider-scales.jpg"/>
    </Wrap>
    
  
    </Content>
    </Container>
  )
}

export default Movies
const Container= styled.div`


`
const Content = styled.div`

display:grid;
grid-template-columns: repeat(4,minmax(0,1fr));
grid-gap:25px;

`
const Wrap = styled.div`

overflow: hidden;
border-radius: 10px;
border:3px solid rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 300ms;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
&:hover{
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  transform: scale(1.07);
  border-color:rgba(249,249,249,0.8);
  cursor: pointer;
  
  
}
`