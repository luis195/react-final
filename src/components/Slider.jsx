import React from 'react';
import styled from "styled-components";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";
const Container = styled.div `
      width: 100%;
      height: 100vh;
      display: flex;
      background-color: white;
      position: relative;
      overflow: hidden;
`;

const Arrow = styled.div `
    width: 50px;
    height: 50px;
    background-color: whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);

`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ghostwhite;
`;
const ImgContainer = styled.div`
    height: 100%;
    
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
    
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 75px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {

    const handleClick = (direction) =>{

    };

    return (
        <Container>
            <Arrow direction = "left" onClick={() => handleClick("left")}>
                <KeyboardArrowLeft/>
            </Arrow>
            <Wrapper>
                <Slide bg>
                    <ImgContainer>
                        <Image src={"https://m.media-amazon.com/images/I/71zHiJq0XfL._AC_SX425_.jpg"}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>titulo 1</Title>
                        <Desc>aprovecha</Desc>
                        <Button>mas velas</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src={"https://m.media-amazon.com/images/I/71zHiJq0XfL._AC_SX425_.jpg"}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>titulo 1</Title>
                        <Desc>aprovecha</Desc>
                        <Button>mas velas</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src={"https://m.media-amazon.com/images/I/71zHiJq0XfL._AC_SX425_.jpg"}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>titulo 1</Title>
                        <Desc>aprovecha</Desc>
                        <Button>mas velas</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction = "right" onClick={() => handleClick("right")}>
                <KeyboardArrowRight/>
            </Arrow>
            
        </Container>
    );
};

export default Slider;