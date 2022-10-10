import React from 'react';
import styled from 'styled-components/native';

const Position = styled.View`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    bottom:0;
`;

const GrayBackground = styled.View`
    background: gray;
    display: flex;
    justify-content: center;
    align-items:center;
    height: auto;
`;


function Footer(props){
    return(
        <Position>
            <GrayBackground>
                <h1>hi</h1>
            </GrayBackground>
        </Position>
    )
}

export default Footer;