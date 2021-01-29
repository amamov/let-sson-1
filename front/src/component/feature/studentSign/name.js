import React from "react"
import styled from "styled-components";

const Box = styled.div`
    padding-top : 10px;
    padding-bottom : 20px;
    padding-left : 20px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    margin-left : 20%;
    margin-right : 20%;
    border-top : solid 1px black;
    background : white;
`;

const Text = styled.div`
    margin-top : 10px;
    margin-bottom : 20px;
`;

const InputBox = styled.input`
    margin-right : 0;
    width : 55%;
    padding-right : 40%;
    padding-bottom : 30px;
`;


class Stusignname extends React.Component{
    constructor(props){
        super(props);
        this.state = { name : "" };
    };

    HandleName = e =>{
        this.setState({name : e.target.value});
        console.log(this.state.name)
    }

    render(){
        return (
            <Box>
               <Text>이름 혹은 별명을 입력해주세요</Text>
               <label className="stuName"><InputBox type="text" onChange={this.HandleName}></InputBox></label>
            </Box>
        );
    }
}

export default Stusignname;