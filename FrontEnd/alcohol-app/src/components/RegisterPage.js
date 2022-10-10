import React from 'react';
import Introheader from './Introheader';
import Footer from './Footer';
import '../assets/register.css'


function RegisterPage(){
    return(
        <div class='outline'>
            <Introheader/>
            <div class='form-wrap'>
                <div class='id-box'>
                <input type="text" class="form-control" placeholder="아이디@이메일" aria-describedby="basic-addon2" style={{width:'200px', height:'50px'}}/>
                <button type="button" class="btn btn-primary" style={{heigth:'30px'}}>중복 확인</button>
                </div>
                
                <input type="text" class="form-control" placeholder="비밀번호" aria-describedby="basic-addon2"/>
                <input type="text" class="form-control" placeholder="비밀번호 확인" aria-describedby="basic-addon2"/>
            </div>
            <Footer/>
        </div>
    )
}

export default RegisterPage;