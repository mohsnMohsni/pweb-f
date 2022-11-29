import { alpha, createTheme } from "@mui/material/styles";
import { detect } from "detect-browser";
import merge from "lodash/merge";
import { defaultTheme } from "./defaultTheme";
import { grey } from "@mui/material/colors";
import { fonts } from "../constants/initialData";

const available = [
  "edge",
  "edge-ios",
  "beaker",
  "edge-chromium",
  "chrome",
  "chromium-webview",
  "opera-mini",
  "android",
  "ios",
  "safari",
  "ios-webview",
];

const backdropAvailable = available.includes(detect()?.name);

const theme = createTheme();

export const availabilityColor = (
  d = "",
  level = "default"
) => {
  let newColor = "";
  if (d.includes("rgb")) {
    if (backdropAvailable) {
      newColor = alpha(d, defaultTheme?.states?.transparency[level].rgb || 1);
    }
  }
  if (d.includes("#")) {
    if (backdropAvailable) {
      newColor = d + defaultTheme?.states?.transparency[level];
    }
  }
  if (!backdropAvailable) {
    newColor = d;
  }
  return newColor;
};
const baseOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: defaultTheme.shape,
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
      fontFamily: fonts.fa.title,
      fontStyle: "normal",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    h2: {
      fontSize: "2rem",
      fontFamily: fonts.fa.title,
      fontStyle: "normal",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    h3: {
      fontSize: "1.75rem",
      fontFamily: fonts.fa.title,
      fontStyle: "normal",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    h4: {
      fontSize: "1.625rem",
      fontFamily: fonts.fa.title,
      fontStyle: "normal",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    h5: {
      fontSize: "1.375rem",
      fontFamily: fonts.fa.title,
      fontStyle: "normal",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    h6: {
      fontSize: "1.28rem",
      fontFamily: fonts.fa.textLight,
      fontStyle: "normal",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    subtitle1: {
      fontSize: "0.97rem",
      fontFamily: fonts.fa.textLight,
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "capitalize",
    },
    subtitle2: {
      fontSize: "0.91rem",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "capitalize",
    },
    body1: {
      fontSize: "0.95rem",
      fontFamily: fonts.fa.text,
      fontStyle: "normal",
      fontWeight: "normal",
      textTransform: "capitalize",
    },
    body2: {
      fontSize: "0.9rem",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      textTransform: "capitalize",
    },
    caption: {
      fontSize: "0.7rem",
      fontFamily: fonts.fa.textLight,
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "capitalize",
    },
    overline: {
      fontSize: "0.68rem",
      fontFamily: fonts.fa.textLight,
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "capitalize",
    },
    button: {
      fontSize: "0.85rem",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "capitalize",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: "none",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box !important",
        },
        html: {
          scrollBehavior: "smooth",
          scrollbarWidth: "thin",
        },
        body: {
          scrollBehavior: "smooth",
          overflowX: "hidden !important",
        },

        "::-webkit-scrollbar": {
          width: 8,
          background: "transparent",
        },
        "::-webkit-scrollbar-thumb": {
          background: defaultTheme.palette?.primary?.main,
          borderRadius: defaultTheme.shape + "px",

          cursor: "pointer",
        },

        ".ps__rail-y": {
          zIndex: "3000",
          right: "0 !important",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "0px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: defaultTheme.states?.backDrop.default,
          borderRadius: defaultTheme.shape / 4 + "px",
          padding: theme.spacing(
            defaultTheme.size.padding.y,
            defaultTheme.size.padding.x,
            defaultTheme.size.padding.y,
            defaultTheme.size.padding.x
          ),
        },
      },
    },

    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: defaultTheme.states?.backDrop.default,
          backgroundColor: "transparent",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: { padding: defaultTheme.size.padding.x },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: defaultTheme.shape,
        },
        sizeMedium: {
          padding: theme.spacing(
            defaultTheme.size.component.medium.t,
            defaultTheme.size.component.medium.r,
            defaultTheme.size.component.medium.b,
            defaultTheme.size.component.medium.l
          ),
        },
        sizeLarge: {
          padding: theme.spacing(
            defaultTheme.size.component.large.t,
            defaultTheme.size.component.large.r,
            defaultTheme.size.component.large.b,
            defaultTheme.size.component.large.l
          ),
        },
        sizeSmall: {
          padding: theme.spacing(
            defaultTheme.size.component.small.t,
            defaultTheme.size.component.small.r,
            defaultTheme.size.component.small.b,
            defaultTheme.size.component.small.l
          ),
        },
      },
    },
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },

    MuiButton: {
      defaultProps: { variant: "contained" },
      styleOverrides: {
        root: {
          transition: theme.transitions.create(["box-shadow"], {
            duration: 100,
          }),
          borderRadius: defaultTheme.shape / 6,
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
        },
        sizeMedium: {
          padding: theme.spacing(
            defaultTheme.size.component.medium.t,
            defaultTheme.size.component.medium.r,
            defaultTheme.size.component.medium.b,
            defaultTheme.size.component.medium.l
          ),
        },
        sizeLarge: {
          padding: theme.spacing(
            defaultTheme.size.component.large.t,
            defaultTheme.size.component.large.r * 20,
            defaultTheme.size.component.large.b,
            defaultTheme.size.component.large.l * 20
          ),
        },
        sizeSmall: {
          padding: theme.spacing(
            defaultTheme.size.component.small.t,
            defaultTheme.size.component.small.r,
            defaultTheme.size.component.small.b,
            defaultTheme.size.component.small.l
          ),
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          marginTop: 5,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: "100%",
          caretColor: defaultTheme.palette?.primary?.main,
          borderRadius: defaultTheme.shape / 6,
          border: "1px solid rgba(0, 0, 0, 0.12)",
        },
        sizeSmall: {
          padding: theme.spacing(
            defaultTheme.size.component.medium.r / 2,
            defaultTheme.size.component.medium.t / 2
          ),
        },
        input: {
          borderRadius: defaultTheme.shape / 6,
          padding: theme.spacing(
            defaultTheme.size.component.medium.t * 2.3,
            defaultTheme.size.component.medium.r,
            defaultTheme.size.component.medium.b * 2.3,
            defaultTheme.size.component.medium.l * 1.8
          ),
        },
      },
    },
  },
};

const LIGHTThemesOptions = {
  shadows: defaultTheme.shadows.light,
  palette: {
    mode: "light",
    primary: defaultTheme.palette?.primary,
    secondary: defaultTheme.palette?.secondary,
    background: defaultTheme.palette?.background?.light,
    divider: defaultTheme.palette?.divider?.light,
    common: defaultTheme.palette?.common?.light,
    warning: defaultTheme.palette?.warning,
    error: defaultTheme.palette?.error,
    info: defaultTheme.palette?.info,
    success: defaultTheme.palette?.success,
    // action: defaultTheme.palette?.action?.dark,
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: { background: defaultTheme.palette?.common?.light?.backDrop },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          "& .MuiBackdrop-root": {
            backdropFilter: "none",
            backgroundColor: "inherit",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: defaultTheme.palette?.secondary?.dark,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: defaultTheme.palette?.text?.light?.secondary,
          background:
            defaultTheme?.palette?.common?.light?.primaryCommonGradient,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: defaultTheme.shadows.light[2],
          backgroundColor: defaultTheme?.palette?.background?.light?.paper,
        },
      },
    },
    MuiTable: {
      styleOverrides: {},
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: defaultTheme.palette?.background.light?.default,
          color: defaultTheme.palette?.text?.light?.primary,
          backdropFilter: defaultTheme.states?.backDrop.default,
        },
      },
    },
    // input design :
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "transparent  !important",
          "&:focus": {
            borderColor: "transparent  !important",
          },
        },
        root: {
          boxShadow: defaultTheme.shadows.light[1],
          background: defaultTheme.palette?.background.light?.default,
          "&.Mui-focused": {
            // boxShadow: `0px 0px 0px 5px ${alpha(defaultTheme.palette?.primary?.light || '', 0.25)}`,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: defaultTheme.palette?.text.light?.secondary,
          "&.Mui-focused": {
            marginTop: "-5%",
            color: defaultTheme.palette?.text.light?.primary,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          minWidth: 200,
          color: defaultTheme.palette?.text.light?.primary,
        },
      },
    },
    MuiChip: {
      defaultProps: { color: "primary" },
      variants: [
        {
          props: { color: "primary" },
          style: {
            backgroundColor:
              defaultTheme?.palette?.common?.light?.primaryCommonGradient,
            color: defaultTheme.palette?.common?.light?.white,
          },
        },
      ],
    },
    MuiSwitch: {},
    // button design :

    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor:
              defaultTheme?.palette?.common?.dark?.primaryCommonGradient,
            color: defaultTheme.palette?.common?.dark?.white,
            padding: theme.spacing(
              defaultTheme.size.component.medium.t * 1.25,
              defaultTheme.size.component.medium.r,
              defaultTheme.size.component.medium.b * 1.25,
              defaultTheme.size.component.medium.l
            ),
            ":hover": {
              backgroundPosition: "100% 0",
              mozTransition: "all .4s ease-in-out",
              OTransition: "all .4s ease-in-out",
              WebkitTransition: "all .4s ease-in-out",
              transition: "all .4s ease-in-out",
            },
            ":active": {
              boxShadow: `0px 0px 0px 5px ${alpha(
                defaultTheme.palette?.primary?.light || "",
                0.25
              )}`,
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            backgroundColor: "inherit",
            borderColor: defaultTheme.palette?.primary?.main,
            color: defaultTheme.palette?.primary?.main,
            ":hover": {
              backgroundColor: "inherit",
            },
            ":active": {
              boxShadow: `0px 0px 0px 5px ${alpha(
                defaultTheme.palette?.primary?.light || "",
                0.25
              )}`,
            },
          },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            backgroundColor: "inherit",
            borderColor: grey[300],
            color: defaultTheme.palette?.primary?.light,
            ":hover": {
              borderColor: grey[300],
              backgroundColor: "inherit",
            },
            ":active": {
              boxShadow: `0px 0px 0px 5px ${alpha(grey[300], 0.25)}`,
            },
          },
        },
        {
          props: { variant: "text", color: "primary" },
          style: {
            backgroundColor: "inherit",
            color: defaultTheme.palette?.primary?.light,
            ":hover": {
              backgroundColor: "inherit",
            },
            ":active": {
              backgroundColor: defaultTheme.palette?.secondary?.light,
            },
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        sizeSmall: {},
        input: {},
        root: {
          backgroundColor: availabilityColor(
            defaultTheme.palette?.background?.light?.paper,
            "high"
          ),
          backdropFilter: defaultTheme.states?.backDrop.default,
          transition: theme.transitions.create([
            "border-color",
            "background-color",
            "box-shadow",
          ]),
          boxShadow:
            defaultTheme.shadows.light[
              defaultTheme.components.inputBase.shadow.default
            ],
          "&:hover": {
            boxShadow:
              defaultTheme.shadows.light[
                defaultTheme.components.inputBase.shadow.hover
              ],
          },
          "&:focus": {
            boxShadow:
              defaultTheme.shadows.light[
                defaultTheme.components.inputBase.shadow.focus
              ] + "!important",
          },
          "&:focus-within": {
            boxShadow:
              defaultTheme.shadows.light[
                defaultTheme.components.inputBase.shadow.focus
              ] + "!important",
          },
          "&:active": {
            boxShadow:
              defaultTheme.shadows.light[
                defaultTheme.components.inputBase.shadow.active
              ],
          },
        },
      },
    },
  },
};

const DARKThemesOptions = {
  shadows: defaultTheme.shadows.dark,
  palette: {
    mode: "dark",
    primary: defaultTheme.palette?.primary,
    secondary: defaultTheme.palette?.secondary,
    background: defaultTheme.palette?.background?.dark,
    divider: defaultTheme.palette?.divider?.dark,
    common: defaultTheme.palette?.common?.dark,
    warning: defaultTheme.palette?.warning,
    error: defaultTheme.palette?.error,
    info: defaultTheme.palette?.info,
    success: defaultTheme.palette?.success,
    // action: defaultTheme.palette?.action?.dark,
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: { background: defaultTheme.palette?.common?.dark?.backDrop },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: defaultTheme.palette?.text?.dark?.secondary,
          background:
            defaultTheme?.palette?.common?.dark?.primaryCommonGradient,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: defaultTheme.shadows.dark[2],
          backgroundColor: availabilityColor(
            defaultTheme?.palette?.background?.dark?.paper,
            "high"
          ),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: defaultTheme.palette?.secondary?.light,
          color: defaultTheme.palette?.text?.dark?.secondary,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: availabilityColor(
            defaultTheme.palette?.background.dark?.paper,
            "low"
          ),
          color: defaultTheme.palette?.text?.dark?.primary,
          backdropFilter: defaultTheme.states?.backDrop.default,
        },
      },
    },
    // input design :
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "transparent  !important",
          "&:focus": {
            borderColor: "transparent  !important",
          },
        },
        root: {
          boxShadow: defaultTheme.shadows.dark[1],
          background: defaultTheme.palette?.background.dark?.default,
          "&.Mui-focused": {
            // boxShadow: `0px 0px 0px 5px ${alpha(defaultTheme.palette?.primary?.dark || '', 0.25)}`,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: defaultTheme.palette?.text.dark?.secondary,
          "&.Mui-focused": {
            marginTop: "-5%",
            color: defaultTheme.palette?.text.dark?.primary,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          minWidth: 200,
          color: defaultTheme.palette?.text.dark?.primary,
        },
      },
    },
    MuiChip: {
      defaultProps: { color: "primary" },
      variants: [
        {
          props: { color: "primary" },
          style: {
            backgroundColor:
              defaultTheme?.palette?.common?.dark?.primaryCommonGradient,
            color: defaultTheme.palette?.common?.dark?.white,
          },
        },
      ],
    },
    MuiSwitch: {},
    // button design :

    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor:
              defaultTheme?.palette?.common?.dark?.primaryCommonGradient,
            color: defaultTheme.palette?.common?.dark?.white,
            padding: theme.spacing(
              defaultTheme.size.component.medium.t * 1.25,
              defaultTheme.size.component.medium.r,
              defaultTheme.size.component.medium.b * 1.25,
              defaultTheme.size.component.medium.l
            ),
            ":hover": {
              backgroundPosition: "100% 0",
              mozTransition: "all .4s ease-in-out",
              OTransition: "all .4s ease-in-out",
              WebkitTransition: "all .4s ease-in-out",
              transition: "all .4s ease-in-out",
            },
            ":active": {
              boxShadow: `0px 0px 0px 5px ${alpha(
                defaultTheme.palette?.primary?.dark || "",
                0.25
              )}`,
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            backgroundColor: "inherit",
            borderColor: defaultTheme.palette?.primary?.dark,
            color: defaultTheme.palette?.primary?.dark,
            ":hover": {
              backgroundColor: "inherit",
            },
            ":active": {
              boxShadow: `0px 0px 0px 5px ${alpha(
                defaultTheme.palette?.primary?.dark || "",
                0.25
              )}`,
            },
          },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            backgroundColor: "inherit",
            borderColor: grey[300],
            color: defaultTheme.palette?.primary?.dark,
            ":hover": {
              borderColor: grey[300],
              backgroundColor: "inherit",
            },
            ":active": {
              boxShadow: `0px 0px 0px 5px ${alpha(grey[300], 0.25)}`,
            },
          },
        },
        {
          props: { variant: "text", color: "primary" },
          style: {
            backgroundColor: "inherit",
            color: defaultTheme.palette?.primary?.dark,
            ":hover": {
              backgroundColor: "inherit",
            },
            ":active": {
              backgroundColor: defaultTheme.palette?.secondary?.dark,
            },
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        sizeSmall: {},
        input: {},
        root: {
          backgroundColor: availabilityColor(
            defaultTheme.palette?.background?.dark?.paper,
            "high"
          ),
          backdropFilter: defaultTheme.states?.backDrop.default,
          transition: theme.transitions.create([
            "border-color",
            "background-color",
            "box-shadow",
          ]),
          boxShadow:
            defaultTheme.shadows.dark[
              defaultTheme.components.inputBase.shadow.default
            ],
          "&:hover": {
            boxShadow:
              defaultTheme.shadows.dark[
                defaultTheme.components.inputBase.shadow.hover
              ],
          },
          "&:focus": {
            boxShadow:
              defaultTheme.shadows.dark[
                defaultTheme.components.inputBase.shadow.focus
              ] + "!important",
          },
          "&:focus-within": {
            boxShadow:
              defaultTheme.shadows.dark[
                defaultTheme.components.inputBase.shadow.focus
              ] + "!important",
          },
          "&:active": {
            boxShadow:
              defaultTheme.shadows.dark[
                defaultTheme.components.inputBase.shadow.active
              ],
          },
        },
      },
    },
  },
};

export const createCustomTheme = (t) => {
  let themeOptions = t === "DARK" ? DARKThemesOptions : LIGHTThemesOptions;

  if (!themeOptions) {
    themeOptions = themeOptions["LIGHT"];
  }
  let theme = createTheme(merge({}, baseOptions, themeOptions));

  return theme;
};
