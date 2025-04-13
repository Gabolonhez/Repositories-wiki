import styled from "styled-components";

export const ButtonContainer = styled.div `
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    
    background-color: #FAFAFA20;
    border: 1px solid #FAFAFA;
    border-radius: 20px;

    height: 62px;
    width: 80%;

    margin: 20px;

    &:hover {
    
        background-color: #FAFAFA40;
        transition: 0.2s ease;
        cursor: pointer;
    }
`