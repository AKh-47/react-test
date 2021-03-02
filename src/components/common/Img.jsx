import styled from "styled-components";

export const Img = styled.img`
    display: block;
    width: ${(props) => props.width};
    height: ${(props) => (props.height ? props.height : props.width)};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    cursor: ${(props) => props.cursor};
    border-radius: ${(props) => props.radius};
`;
