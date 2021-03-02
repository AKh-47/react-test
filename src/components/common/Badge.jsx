import styled from "styled-components";

export const Badge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: ${(props) => props.width};
    border-radius: 24px;
    border: 1px solid ${(props) => props.theme.borderLight};
    padding: 0 18px;
    background-color: ${(props) => props.theme.bgPrimary};
    color: ${(props) => props.theme.gray1};
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    margin: ${(props) => props.margin};
`;
