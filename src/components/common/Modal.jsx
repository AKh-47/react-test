import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #00000044;
    z-index: 999;
    --children-width: ${(props) => (props.width ? props.width : "550px")};
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    width: var(--children-width);
    max-width: 90vw;
    color: ${(props) => props.theme.accent};
    background-color: ${(props) => props.theme.bgPrimary};
    border-bottom: 1px solid ${(props) => props.theme.borderLight};
`;

export const ModalBody = styled.div`
    --padding: ${(props) => (props.padding ? props.padding : "30px")};
    padding: var(--padding);
    width: calc(var(--children-width) - var(--padding) * 2);
    max-width: calc(90vw - var(--padding) * 2);
    max-height: 70vh;
    background-color: ${(props) => props.theme.bgPrimary};
    overflow-y: ${(props) => (!props.overflow ? "none" : "auto")};
`;

export const ModalFooter = styled.div`
    margin-top: ${(props) => (props.margin ? props.margin : "40px")};
`;
