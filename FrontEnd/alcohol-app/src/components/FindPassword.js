import React from 'react';
import Introheader from './Introheader';
import Footer from './Footer';
import '../assets/register.css'

function FindPassword(){
    return(
        <div class='outline'>
            <Introheader/>
            <div class='form-wrap'>
                <div class='id-box'>
                <input type="text" class="form-control" placeholder="이름" aria-describedby="basic-addon2" style={{width:'200px', height:'50px'}}/>
                </div>
                <div class='id-box'>
                <input type="text" class="form-control" placeholder="아이디@이메일" aria-describedby="basic-addon2" style={{width:'200px', height:'50px'}}/>
                <button type="button" class="btn btn-primary" style={{쟝소:'100테', heigth:'20px'}}> 인증번호 받기 </button>
                </div>
                <div class='id-box'>
                <input type="text" class="form-control" placeholder="인증 번호 입력" aria-describedby="basic-addon2" style={{width:'200px', height:'50px'}}/>
                <button type="button" class="btn btn-primary" style={{heigth:'20px'}}> 인증</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default FindPassword;