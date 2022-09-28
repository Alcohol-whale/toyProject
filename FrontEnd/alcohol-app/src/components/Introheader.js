import React from 'react';
import styled from 'styled-components/native';

const Position = styled.View`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
`;

const GrayBackground = styled.View`
    background: white;
    display: flex;
    justify-content: center;
    align-items:center;
    height: auto;
`;


const Logo = styled.View`
    font-size: 80px;
    font-weigth:bold;
    letter-spacing: 2px;
    font-family: 'title-font';
`;

const Spacer = styled.View`
    flex-grow: 1;
`;


const Introheader = ({ props }) => {
    return (
        <Position>
            <GrayBackground>
                <Logo><a href="/" style={{textDecorationLine:'none', color:'black'}}> 술고래 </a></Logo>
            </GrayBackground>
        </Position>
    );
}

export default Introheader;