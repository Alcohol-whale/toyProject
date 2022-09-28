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

const HeaderContents = styled.View`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: space-around;
    padding-right: 1rem;
    padding-left: 1rem;
`;

const Logo = styled.View`
    font-size: 80px;
    font-weigth:bold;
    letter-spacing: 2px;
    font-family: 'title-font';
`;

const Spacer = styled.View`
    flex-grow:1;
`

const Mainheader = ({ props }) => {
    return (
        <Position>
            <GrayBackground>
                <HeaderContents>
                    <Logo><a href="/main" style={{ textDecorationLine: 'none', color: 'black' }}> 술고래 </a></Logo>
                    <Spacer />
                    < nav class="navbar navbar-expand-lg navbar-light bg-white">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Spacer />
                    <div>h2</div>
                </HeaderContents>
            </GrayBackground>
        </Position>
    );
}

export default Mainheader;