import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import LoginUser from './LoginUser'
import axios from 'axios'
import '../assets/Intro.css'
import Introheader from './Introheader';
import Footer from './Footer';
function IntroPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = React.useState("");
    const [Password, setPassword] = React.useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        let body = {
            email: Email,
            password: Password
        }

        dispatch(LoginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push("/main");
                }
                else {
                    alert("Error");
                }
            })
    }

    return (
        <div class='Intro'>
            <Introheader />
            <div class="wrap">
                <div class="box">
                    <div class='id'>
                        <input type="text" class="form-control" placeholder="아이디@이메일" value={Email} onChange={onEmailHandler}
                            aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <div class="password">
                        <input type="password" class="form-control" placeholder="비밀번호" value={Password} onChange={onPasswordHandler}
                            aria-label="Recipient's password" aria-describedby="basic-addon2" />
                    </div>
                </div>
                <div class="login-btn">
                    <button type="button" class="btn btn-primary" onClick={onSubmitHandler} style={{width:'100px', height:'70px'}}>로그인</button>
                </div>
                <div class="regi_box">
                    <div class="find-password"><a href="/findPassword"> 비밀번호 찾기 </a></div>
                    <div class="register"><a href="/register">회원가입</a></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default IntroPage;
