import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import LoginUser from './LoginUser'
import axios from 'axios'
import '../assets/Intro.css'
function IntroPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = React.useState("");
    const [Password, setPassword] = React.useState("");

    const onEmailHandler = (event)=>{
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        let body={
            email:Email,
            password:Password
        }

        dispatch(LoginUser(body))
        .then(response => {
          if(response.payload.loginSuccess){
            props.history.push("/main");
          }  
          else{
            alert("Error");
          }
        })
    }

  return (
        <div class='Intro'>
            <div class='images'></div>
            <div class='id'>
                <input type="text" class="form-control" placeholder="아이디@이메일" value={Email} onChange={onEmailHandler}
                aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
            <div class="password">
                <input type="password" class="form-control" placeholder="비밀번호" value={Password} onChange={onPasswordHandler}
                aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
            <div class="login-btn">
                <button type="button" class="btn btn-primary">로그인</button>
            </div>
            <div class="find-password"><a href="/findPassword"> 비밀번호 찾기 </a></div>
            <div class="register"><a href="/register">회원가입</a></div>
        </div>
  );
}

export default IntroPage;
