import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.section`
    padding-bottom:30px;

`
const Button = styled.button`
    width:10%;
    @media(max-width:578px){
        width:50%;
   
    }

`
const Img = styled.img`
    width:40%  ;
    padding-top:30px;
  
`
const Logo = styled.img`
    
    border:solid red;
    width:10%;



`
const Title = styled.h1`

`
const Header = styled.header`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
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
                <Logo src="https://static.wikia.nocookie.net/megamitensei/images/9/98/Q2_AOA_P3_Koromaru.png/revision/latest/scale-to-width-down/250?cb=20190905100747" alt="cachoro" />
            </Header>
            <Main>
                <Button onClick={() => { Dog() }}> Random</Button>
                <Img src={listDog} />
            </Main>
        </Container>
    )
}