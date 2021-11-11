import styled from "styled-components";

export const Container = styled.div`
    background-color: lightgrey;
    color: ${(props=>props.color)};
    font-size: 20px;
    width: 323px;
    margin-top: 25px;
    border-radius: 15px;
`;
