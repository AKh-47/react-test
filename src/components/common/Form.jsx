import styled from "styled-components";
import { Row, Col } from "react-grid-system";

export const Form = styled.form`
    display: ${(props) => (props.invisible ? "inherit" : "block")};
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
    padding: ${(props) => (props.invisible ? "" : props.padding || "40px")};
    background-color: ${(props) =>
        props.invisible ? "#00000000" : props.theme.bgTertiary} !important;

    @media (max-width: 576px) {
        padding: 30px;
    }
`;

export const FormTitle = styled.div`
    color: ${(props) => props.theme.dark2};
    margin-bottom: 20px;
    background-color: ${(props) =>
        props.invisible ? "#00000000" : props.theme.bgTertiary} !important;
    font-weight: 600;
    font-size: 24px;
`;

export const FormRow = styled(Row)`
    background-color: ${(props) =>
        props.invisible ? "#00000000" : props.theme.bgTertiary} !important;
`;

export const FormCol = styled(Col)`
    display: flex;
    flex-direction: column;
    padding-right: ${(props) => (props.left ? "5px" : "auto")} !important;
    padding-left: ${(props) => (props.right ? "5px" : "auto")} !important;
    background-color: ${(props) =>
        props.invisible ? "#00000000" : props.theme.bgTertiary} !important;
`;

export const FormHeader = styled.div`
    font-size: 14px;
    color: ${(props) => props.theme.accent};
    border-bottom: 1px solid ${(props) => props.theme.borderDark};
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-top: ${(props) => (props.top ? 0 : "30px")};
`;
