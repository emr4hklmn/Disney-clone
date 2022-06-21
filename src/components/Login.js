import React from 'react'
import styled from 'styled-components';

const Login = (props) => {
    return(
    <Container>
    <Content>
    <ContentLogoOne src="/images/cta-logo-one.svg"/>
    <ContentButton>GET ALL THERE</ContentButton>
    <Description>Raya And The Last Dragon is available on Disney+ Premier Access. To get Premier Access, you need to already have a subscription to Disney+, which you can get directly from Disney for $8 per month or $80 per year</Description>
    <ContentLogoTwo src="/images/cta-logo-two.png"/>
    
    
    </Content>
    </Container>
    );
};



export default Login;
const Container= styled.div`
display:flex;
justify-content:center;
align-items: top;
position: relative;
height:calc(100vh - 70px);
width: 100vw;
&:before {
    opacity: 0.8;
    background-position: top;
    background-size: cover;
    background-repeat:no-repeat;
    position: absolute;
    top:0;
    bottom:0;
    content:"";
    left:0;
    right:0;
    background-image: url("/images/login-background.jpg");
    z-index: -1;

}

`
const Content= styled.div`
padding-top:200px;
max-width: 500px;
width: 100vw;
height: 90vh;
display:flex;
flex-direction: column;
justify-content: top;
align-items: center;

`
const Description= styled.p`
max-width: 500px;
    width:60vw;
    text-align: center;
    font-size:11px;
    letter-spacing:1.5px;
    line-height: 1.4;
    
    `
const ContentLogoOne=styled.img`
width:60vw;
max-width: 500px;
`
const ContentButton=styled.a`

max-width: 500px;
text-align: center;
width:60vw;
padding:15px 30px;
margin:5px 0;
background-color:#0063e5;
color:white;
letter-spacing:1.8px;
font-size: 13px;
border-radius: 3px;
border:none;
cursor: pointer;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms;
&:hover{
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  
  border:2px solid rgba(249,249,249,0.8);
  background-color: transparent;
  
  
  
}
`
const ContentLogoTwo=styled.img`
width:60vw;
max-width: 500px;

`

