import styled from "styled-components";

export const BrandLogo = styled.img.attrs(() => ({ src: require("./assets/brandlogo.svg").default }))`
    display: inline-block;
    width: ${(props) => props.width};
    height: ${(props) => (props.height ? props.height : props.width)};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    cursor: pointer;
`;

export const BrandName = styled.img.attrs(() => ({ src: require("./assets/brandname.svg").default }))`
    display: inline-block;
    width: ${(props) => props.width};
    height: ${(props) => (props.height ? props.height : props.width)};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    cursor: pointer;
`;
