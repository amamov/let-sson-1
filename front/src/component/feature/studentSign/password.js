import React from "react";
import styled from "styled-components";
import Interview_tmy from "../myPageTedit/subjectmy_btns/interview";

const Box = styled.div`
    padding-top : 10px;
    padding-bottom : 20px;
    padding-left : 20px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    margin-left : 25%;
    margin-right : 25%;
    border-top : solid 3px #010440;
    background : white;
    margin-top : 30px;
`;

const Text = styled.div`
    margin-top : 10px;
    margin-bottom : 20px;
`;


const InputBox = styled.input`
    border : 0.05em solid #010440;
    margin-right : 0;
    width : 55%;
    padding-right : 40%;
    padding-bottom : 30px;
    margin-top : 8px;
`;


class Stusignpassword extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = props.handleChange;
    };

    render(){
        return (
            <Box>
                <Text>비밀번호를 입력해주세요</Text>
                <label className="stuPassword">
                <InputBox type="password" name="password" value={this.props.state.password} onChange={this.handleChange} placeholder="비밀번호"></InputBox></label>
                <label className="stuPassword">
                <InputBox type="password" name="passcheck" value={this.props.state.passcheck} onChange={this.handleChange} placeholder="비밀번호 확인"></InputBox></label>
            </Box>
        );
    }
}

export default Stusignpassword;