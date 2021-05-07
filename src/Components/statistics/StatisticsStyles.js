import styled from "styled-components";

const Section = styled.section`
    display: flex;
    color: black;
    flex-direction: column;
    align-items: center;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    border-right: 2px solid black;
    border-left: 2px solid black;
`

const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80;
    height: 80;
    margin-bottom: 0;
`
export { Item, List, Section }