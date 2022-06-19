import React from 'react'
import styled from 'styled-components'


function Header() {
  return (
    <Nav>
    <Logo src="images/Logo.svg"/>
    <NavMenu>
        <a>
        <img src="images/home-icon.svg"/>
        <span>HOME</span>
        </a>
        <a>
        <img src="images/search-icon.svg"/>
        <span>SEARCH</span>
        </a>
        <a>
        <img src="images/watchlist-icon.svg"/>
        <span>WATCHLIST</span>
        </a>
        <a>
        <img src="images/original-icon.svg"/>
        <span>Originals</span>
        </a>
        <a>
        <img src="images/movie-icon.svg"/>
        <span>MOVIES</span>
        </a>
        <a>
        <img src="images/series-icon.svg"/>
        <span>SERIES</span>
        </a>
    </NavMenu>
    <UserPhoto src="images/user-photo.jpg"/>

    </Nav>
  )
}
export default Header


const Nav = styled.nav`
overflow-x:hidden;
height: 70px;
background-color:#090b13;
display: flex;
align-items:center;
padding: 0 36px;
width: 100vw;
`;
const Logo= styled.img`
width: 80px;
height: 30px;
`;
const NavMenu = styled.div `
display:flex;
align-items:center;
flex:1;
margin-left: 25px;

a{
  display:flex;
  align-items:center;
  padding: 0 12px;
  cursor: pointer;
  
  img{
    height: 20px;
    width: 20px;
  }
  span{
    font-size:13px;
    letter-spacing:1.5px;
    margin-left: 3px;
    position:relative;
    &:after{ // adds abstract div
      content:"";
      height: 2px;
      background:white;
      border-radius: 10px;
      position: absolute;
      left:0;
      right: 0;
      bottom:-5px;
      opacity: 0;
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.9) 0s;
      transform: scaleX(0);
    }
  }
  &:hover{
    span:after{
      transform:scaleX(1);
      opacity: 1;
    }
  }
}
`;
const UserPhoto = styled.img`
width: 45px;
height: 45px;
border-radius:50%;
`;
