import defaultColors from "../util/default-colors.json"
import darkColors from "../util/dark-theme-colors.json"
import { lightness } from "@theme-ui/color"
const theme = {
  colors: {
    ...defaultColors,
    text: "#000",
    background: "#fff",
    primary: "#5C2941",
    accent: "#fff",
    muted: "rgba(0, 0, 0, 0.7)",
    cardBg: "#fff",
    borderColor: "#540229",
    labelText: "#777",
    inputBorder: "#aaa",
    inputBackground: "#fff",
    socialIcons: lightness("siteColor2", 0.4),
    socialIconsHover: lightness("siteColor2", 0.3),
    buttonColor: lightness("siteColor2", 1.0),
    buttonHoverBg: lightness("siteColor2", 0.4),
    buttonHoverColor: lightness("siteColor2", 0.9),
    modes: {
      dark: {
        text: "#f5f5f5",
        background: "#111",
        primary: "#252525",
        accent: "#5C2941",
        muted: "rgba(255, 255, 255, 0.7)",
        cardBg: "#252525",
        borderColor: "#888",
        labelText: "#777",
        inputBorder: "#777",
        inputBackground: "#333",
        socialIcons: lightness("siteColor2", 0.5),
        socialIconsHover: lightness("siteColor2", 0.9),
        buttonColor: lightness("siteColor2", 0.9),
        buttonHoverBg: lightness("siteColor2", 0.3),
        buttonHoverColor: lightness("siteColor2", 1.0),
        ...darkColors,
      },
    },
  },
  links: {
    postLink: {
      color: "muted",
      "&:hover": {
        color: "text",
      },
    },
  },
  variants: {
    button: {
      bg: "siteColor2",
      color: "buttonColor",
      "&:hover": {
        bg: "buttonHoverBg",
        color: "buttonHoverColor",
      },
    },
    socialIcons: {
      a: {
        color: "socialIcons",
        ":hover": {
          color: "socialIconsHover",
        },
      },
    },
  },
}

export default theme
