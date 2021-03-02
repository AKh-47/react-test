import { createGlobalStyle } from "styled-components";

export const Theme = {
    font: "'Sora', sans-serif",
    bgPrimary: "#FFFFFF",
    bgSecondary: "#F9FAFB",
    bgTertiary: "#F5F6F9",
    borderDark: "#DDE7EB",
    borderLight: "#E5EAED",
    accent: "#A38025",
    dark1: "#0B1032",
    dark2: "#3C3D40",
    dark3: "#464646",
    dark4: "#1E2E3B",
    gray1: "#6B7280",
    gray2: "#6E819A",
    gray3: "#A9ACB8",
    gray4: "#C2CFE026",
    blue1: "#032540",
    blue2: "#228DEF",
    blueGray1: "#97A8BE",
    lightPink1: "#F61E52",
    lightGreen1: "#77C35C",
    lightBlue1: "#1B91FF",
    black: "#000000",
};

export const GlobalStyle = createGlobalStyle`
    html {
        background-color: ${Theme.bgPrimary};
        font-family: ${Theme.font};
    }

    body {
        margin: 0;
        padding: 0;
    }

    :root {
        ${Object.keys(Theme).map((key) => `--${key}: ${Theme[key]};`)}
    }
`;
