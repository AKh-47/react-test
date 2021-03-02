import styled, { css } from "styled-components";

export const Button = styled.button`
    --color: ${(props) =>
        props.themeColor ? props.theme[props.themeColor] : props.color || props.theme.accent};
    --color-DD: ${(props) =>
        props.themeColor ? props.theme[props.themeColor] : props.color || props.theme.accent}DD;
    --color-33: ${(props) =>
        props.themeColor ? props.theme[props.themeColor] : props.color || props.theme.accent}33;
    --color-22: ${(props) =>
        props.themeColor ? props.theme[props.themeColor] : props.color || props.theme.accent}22;
    --color-11: ${(props) =>
        props.themeColor ? props.theme[props.themeColor] : props.color || props.theme.accent}11;

    height: ${(props) => (props.height ? props.height : "40px")};
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    font-family: ${(props) => props.theme.font};
    font-weight: ${(props) => (props.bold ? 600 : 400)};
    font-size: 14px;
    letter-spacing: ${(props) => (props.wide ? "0.08em" : "auto")};
    border: none;
    border-radius: 3px;
    outline: none !important;
    cursor: pointer;
    color: ${(props) => props.theme.bgPrimary};
    background-color: var(--color);

    &:hover,
    &:active {
        background-color: var(--color-DD);
    }

    ${(props) =>
        props.outline &&
        css`
            color: var(--color);
            background-color: #00000000;
            border: 1px solid var(--color);

            &:hover,
            &:active,
            &:focus {
                color: ${(props) => props.theme.bgPrimary};
                background-color: var(--color);
            }
        `};

    ${(props) =>
        props.transparent &&
        css`
            color: var(--color);
            background-color: #00000000;

            &:hover,
            &:active,
            &:focus {
                background-color: var(--color-11);
            }
        `};

    ${(props) =>
        props.light &&
        css`
            color: var(--color);
            background-color: var(--color-33);

            &:hover,
            &:active,
            &:focus {
                background-color: var(--color-22);
            }
        `};

    &:disabled {
        color: var(--color);
        background-color: var(--color-22) !important;
        cursor: auto;
    }
`;
