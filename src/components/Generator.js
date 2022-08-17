import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.section`
    padding-bottom:30px;
    padding-top:1vw;

`
const Button = styled.button`
    width:15%;
    font-size:1.5vw;
    @media(max-width:578px){
        width:50%;
   
    }

`
const Img = styled.img`
    width:40%  ;
    padding-top:30px;
  
`
const Logo = styled.img`
    
    border:solid black 2px;
    width:10%;s
    border-radius:50%;



`
const Title = styled.h1`
    font-size:2vw;
    @media(max-width:578px){
        font-size:4vw;
   
    }

`
const Header = styled.header`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    padding-bottom:20px;

`
const Main = styled.main`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

`

export default function Generator() {
    const [listDog, setlistDog] = useState([])
    function Dog() {
        axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
            setlistDog(response.data.message)
        })
    }
    return (
        <Container>
            <Header>
                <Title>Dog Generator</Title>
                <Logo src="https://pbs.twimg.com/profile_images/1546324651844009984/iJXdzpBo_400x400.jpg" alt="cachoro" />
            </Header>
            <Main>
                <Button onClick={() => { Dog() }}> Random</Button>
                <Img src={listDog} />
            </Main>
        </Container>
    )
}