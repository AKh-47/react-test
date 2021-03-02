import styled from "styled-components";
import Select from "react-select";
import MultiSelect from "react-multi-select-component";

export const Input = styled.input`
    height: ${(props) => (props.height ? props.height : "40px")};
    width: ${(props) => props.width};
    padding: 0 10px 0 15px;
    margin: ${(props) => (props.margin ? props.margin : "12px 0 12px 0")};
    font-size: 14px;
    font-family: ${(props) => props.theme.font};
    background-color: ${(props) => props.theme.bgPrimary};
    border: 1px solid ${(props) => props.theme.borderLight};
    border-radius: 3px;
    outline: none;

    &:active,
    &:focus,
    &:hover {
        background-color: ${(props) => props.theme.bgPrimary};
        border: 1px solid ${(props) => props.theme.accent};
        outline: none;
    }

    &:disabled {
        background-color: ${(props) => props.theme.bgSecondary};
        border: 2px solid ${(props) => props.theme.bgSecondary};
        outline: none;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type="number"] {
        -moz-appearance: textfield;
    }

    &[type="file"] {
        display: none;
    }
`;

export const InputSelect = styled(Select).attrs((props) => ({
    styles: {
        indicatorSeparator: (provided) => ({ ...provided, display: "none" }),
        option: (provided, state) => ({
            ...provided,
            fontSize: "14px",
            backgroundColor: state.isSelected ? `${props.theme.accent}` : "#FFFFFF",
            ":hover": {
                ...provided[":active"],
                backgroundColor: state.isSelected
                    ? `${props.theme.accent}BB`
                    : `${props.theme.accent}55`,
            },
        }),
        menu: (provided) => ({
            ...provided,
            marginTop: "1px !important",
        }),
        control: (provided, state) => ({
            ...provided,
            fontSize: "14px",
            fontWeight: props.bold ? 700 : 400,
            border: `1px solid ${state.isFocused ? props.theme.accent : props.theme.borderLight}`,
            height: `${props.height ? props.height : "40px"}`,
            padding: "0 0 9px 5px",
            margin: `${props.margin ? props.margin : "6px"}`,
            boxShadow: "none",
            ":active": {
                ...provided[":active"],
                border: `1px solid ${props.theme.accent}`,
                boxShadow: "none",
            },
            ":focus": {
                ...provided[":active"],
                border: `1px solid ${props.theme.accent}`,
                boxShadow: "none",
            },
            ":hover": {
                ...provided[":active"],
                border: `1px solid ${props.theme.accent}`,
                boxShadow: "none",
            },
        }),
    },
}))`
    width: ${(props) => "calc(" + props.width + " + 26px)"} !important;
    font-family: ${(props) => props.theme.font};
`;

export const InputMultiSelect = styled(MultiSelect).attrs(() => ({
    disableSearch: true,
    hasSelectAll: false,
}))`
    width: ${(props) => props.width};
    --rmsc-h: ${(props) => (props.height ? props.height : "40px")};
    margin: ${(props) => (props.margin ? props.margin : "12px 0 12px 0")};
    font-family: ${(props) => props.theme.font};
    font-size: 14px;
    --rmsc-bg: ${(props) => props.theme.bgPrimary};
    --rmsc-border: ${(props) => props.theme.borderLight} !important;
    --rmsc-main: ${(props) => props.theme.accent} !important;
    --rmsc-hover: ${(props) => props.theme.accent}33 !important;
    --rmsc-selected: ${(props) => props.theme.accent}55 !important;
    --rmsc-radius: 3px;
    outline: none;
`;

export const Label = styled.label`
    display: inline-block;
    font-weight: 600;
    font-size: 14px;
    color: ${(props) => (props.accent ? props.theme.accent : props.theme.dark2)};
    background-color: #00000000;

    img {
        pointer-events: none;
    }
`;

export const Checkbox = styled.input.attrs(() => ({ type: "checkbox" }))`
    height: ${(props) => (props.height ? props.height : "40px")};
    margin: ${(props) => (props.margin ? props.margin : "12px 8px 12px 0")};
`;

export const Radio = styled.input.attrs(() => ({ type: "radio" }))`
    height: ${(props) => (props.height ? props.height : "40px")};
    margin: ${(props) => (props.margin ? props.margin : "12px 8px 12px 0")};
`;
