import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
border-radius: 5px;
font-size: 20px;
color: red;
`;

const Avatar = styled.img`
border-radius: 50%;
margin-top: 70px;
`

const Label = styled.span`
margin-right: 20px;
`


export { Wrapper, Avatar, Label }


 