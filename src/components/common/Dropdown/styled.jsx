import styled from "styled-components";
import Dropdown from "./Dropdown";

export const DropdownItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${(props) => props.theme.font};
`;

export const DropdownButton = styled.button`
    display: flex;
    align-items: center;
    padding-left: 1em;
    width: 100%;
    height: 40px;
    font-family: ${(props) => props.theme.font};
    font-size: 14px;
    color: ${(props) => props.theme.dark3};
    background-color: ${(props) => props.theme.bgPrimary};
    outline: none;
    border: none;
    border-top: 1px solid rgba(194, 207, 224, 0.31);
    border-radius: 0 0 3px 3px;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
        background-color: ${(props) => props.theme.bgSecondary};
    }
`;

export const DropdownContainer = styled(Dropdown)`
    display: ${(props) => (props.open ? "block" : "none")};
    position: absolute;
    background-color: ${(props) => props.theme.bgPrimary};
    border: 1px solid ${(props) => props.theme.borderLight};
    box-sizing: border-box;
    box-shadow: 0px 4px 9px 1px rgba(0, 0, 0, 0.06);
    border-radius: 3px;
    z-index: 999;
`;
