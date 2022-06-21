import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
    <Background>
    <img src="/images/detail.jpg" alt="Background"/>
    </Background>
    <ImageTitle>
    <img src="/images/viewers-disney.png" alt=" Title"/>
    </ImageTitle>
    <Controls>
    <PlayButton>
    <img src="/images/play-icon-black.png" alt=" Play"/>
    <span>PLAY</span>
    </PlayButton>
    <TrailerButton>
    <img src="/images/play-icon-white.png" alt=" Play"/>
    <span>TRAILER</span>
    </TrailerButton>
    <AddButton>
    <span>+</span>
    
    </AddButton>
    <GroupWatchButton>
    <img src="/images/group-icon.png" alt=" Play"/>
    </GroupWatchButton>
    </Controls>
    <SubTitle>
    <p class="view">2020 &#8226; 15m &#8226; Family, Fantasy, War</p>
    <p class="Info">Star Wars is an American epic space-opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.</p>
    </SubTitle>
    </Container>
  )
}

export default Detail

const Container=styled.div`
min-height:calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;

`
const Background=styled.div`
position: fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.8;
img{
  width: 100%;
  height:100%;
  object-fit: cover;
  
}
`
const ImageTitle = styled.div`
height: 40vh;
width: 40vw;
min-height: 170px;
min-width: 200px;
margin-left:0;

img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  
  
}
`
const Controls = styled.div`
display: flex;
align-items: center;
`
const PlayButton = styled.button`
height: 55px;
display: flex;
align-items: center;
margin-right: 22px;
cursor: pointer;
background-color: rgb(249,249,249);
border-radius: 5px;
border: none;
padding:0 24px;
font-size:15px;
letter-spacing: 1.8px;
&:hover{
  background-color: rgb(200,200,200);

}

`
const TrailerButton = styled(PlayButton)`

cursor: pointer;
background-color:rgba(0, 0, 0, 0.4);
border:1.5px solid white;
color:white;



`
const AddButton = styled.button`
width: 44px;
height: 44px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 16px;
cursor: pointer;
background-color: rgba(0, 0, 0, 0.4);
border-radius: 50%;
border:1.5px solid white;
padding:6px 10px;
span{
  font-size:30px;
  color:white;
}


`
const GroupWatchButton = styled.button`
display: flex;
justify-content: center;
align-items: center;

cursor: pointer;
background-color: rgba(0, 0, 0, 0.9);
border-radius: 50%;
border:1.5px solid white;
padding:3px;
`
const SubTitle = styled.div`
width: 600px;
.view{
color: white;
font-size:12px;
margin-bottom:5px;
}
.Info{
font-family:arial,sans-serif;
text-align: left ;
letter-spacing: 1.9px;
color:white;
font-size:15px;


}
`