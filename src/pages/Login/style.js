import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 15px;

    input, button{
        margin: 15px 0px;
        padding: 5px;
        font-size: 24px;
        border-radius: 10px;
        text-align: center;
        transition: all 0.5s;
    }

    button:hover{
        background-color: grey;
    }
`;