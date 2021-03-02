import styled from "styled-components";

export const Hyperlink = styled.a`
    margin: 0 0.3em 0 0.3em;
    color: ${(props) => (props.secondary ? props.theme.gray1 : props.theme.accent)};
    background-color: #00000000;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
        text-decoration: underline;
    }
`;
