import styled from "styled-components";

const Table = styled.table`
background-color: #eeeeee;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& thead, & tbody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

& th, & td {
    padding: 20px 100px 20px 100px;
}
`

export { Table };