import React from 'react';
import styled from 'styled-components/native';
import '../assets/mainHeader.css'

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
    width:60px;
    flex-grow:1;
`;

const Spacer = styled.View`
    flex-grow:1;
`;

const Profile = styled.View`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-grow:1;
    overflow:hidden;
    position:relative;
`;

const Mainheader = ({ props }) => {
    const Nickname = props;
    return (
        <Position>
            <GrayBackground>
                <HeaderContents>
                    <Logo><a href="/main" style={{ textDecorationLine: 'none', color: 'black' }}> 술고래 </a></Logo>
                    <Spacer />
                    < nav class="navbar navbar-expand-lg navbar-light bg-white">
                        <div class="collapse navbar-collapse" id="navbarNav" style={{ fontSize: '30px' }}>
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">홈</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">술 추천</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">번개 모임</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">잡담</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Spacer />
                    <Profile>
                        <div class='prof-box1'>
                            <div class='profImg' style={{flexGrow:1}}><img src={require("../img/profile.svg").default} /></div>
                            <div class='nickname' style={{flexGrow:1, fontSize:'15px'}}> nickname 님 환영합니다.</div>
                        </div>
                        <div class='prof-box2'>
                            <div style={{flexGrow:1}}> <a href='/' style={{textDecorationLine:'none', color:'black'}}>로그아웃</a></div>
                            <div style={{flexGrow:1}}>회원정보 수정</div>
                            <img src={require("../img/chatting.svg").default} style={{ width: '30px', height: '30px' ,flexGrow:1}} />
                        </div>
                    </Profile>
                </HeaderContents>
            </GrayBackground>
        </Position>
    );
}

export default Mainheader;