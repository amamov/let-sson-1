import React from "react"
import styled from "styled-components";

const Box = styled.div`
margin-top : 30px;
padding-top: 10px;
padding-bottom: 20px;
padding-left: 20px;
display: flex;
flex-direction: column;
justify-content: center;
margin-left : 25%;
margin-right : 25%;
border-top : solid 3px #010440;
background: white;
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
`;

class Teasignphone extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = props.handleChange;
      }

    render(){
        return (
            <Box>
                <Text>휴대폰 번호를 입력해주세요 (아이디로 사용됩니다)</Text>
                <label className="stuTel"><InputBox type="tel" name="tel" value={this.props.state.tel} onChange={this.handleChange}></InputBox></label>
            </Box>
        );
    }
}

export default Teasignphone;