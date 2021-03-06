import React from "react";
import HeadButton from "../component/layout/header"
import styled from "styled-components";

const Wrapper = styled.form`
    position: absolute;
    width: 500px; 
    height: 180px; 
    margin-left: -200px; 
    margin-top: -90px; 
    left : 50%;
    top: 50%; 
    padding-top : 30px;
    display : flex;
    flex-direction: column;
    justify-content: center;

`;
const FindText = styled.div`
    margin-bottom : 30px;
    padding-right : 10px;
`;
const SuccessBtn = styled.input`
    height:75px;
    color: black;
    background-color: white;
    font-size: 16px;
    border: none;

    margin-left : 25%;
    padding : 0 15px 0 15px;
    width : 40%;
`;
const LogText1 = styled.span`
    text-align : right;
    padding-right : 15%;
    margin-left : 35px;
`;
const LogText2 = styled.span`
    text-align : right;
    padding-right : 9%;
    margin-left : 35px;
`;
const FindInput = styled.input`
    margin-right : 0;
    width : 55%;
    height : 100%;
`;
class Findpassword extends React.Component{
    Confirm = (e) =>{
        alert("당신의 아이디는 {}, 비밀번호는 {} 입니다.");
    }

    render(){
        return(
            <div>
                <HeadButton />
                <Wrapper>
                    <FindText>
                        <label className="tofindtel">
                            <LogText1>이름</LogText1>
                            <FindInput type="text"></FindInput>
                        </label>
                    </FindText>

                    <FindText>

                        <label className="tofindtel">
                            <LogText2>전화번호</LogText2>
                            <FindInput type="text" placeholder="숫자로만 입력해주세요"></FindInput>
                        </label>
                    </FindText>
            
                    <SuccessBtn type="submit" value="확인" onClick={this.Confirm}></SuccessBtn>
                </Wrapper>

            </div>
        );
    }
}

export default Findpassword;