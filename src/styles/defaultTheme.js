// in default theme you can add all general color for website:
const states = {
  navbar: 'md',
  transparency: {
    default: { hex: '88', rgb: 0.6 },
    low: { hex: '33', rgb: 0.3 },
    high: { hex: 'dd', rgb: 0.8 },
  },
  backDrop: {
    default: 'saturate(180%) blur(20px)',
    low: 'saturate(180%) blur(5px)',
    high: 'saturate(180%) blur(35px)',
  },
};

export const defaultTheme = {
  shadows: {
    light: [
      'none',
      '0px 0px 2px rgba(14, 31, 53, 0.12)',
      '0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06)',
      '0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08)',
      '0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.1), 0px 6px 12px rgba(14, 31, 53, 0.08)',
      '0px 2px 4px rgba(14, 31, 53, 0.06), 0px 6px 12px rgba(14, 31, 53, 0.08), 0px 12px 20px rgba(14, 31, 53, 0.06)',
      '0px 3px 6px rgba(14, 31, 53, 0.08), 0px 6px 12px rgba(14, 31, 53, 0.12), 0px 14px 24px rgba(14, 31, 53, 0.08)',
      // tslint:disable-next-line: max-line-length
      '0px 4px 8px rgba(14, 31, 53, 0.1), 0px 8px 16px rgba(14, 31, 53, 0.16), 0px 16px 28px -1px rgba(14, 31, 53, 0.1)',
      '0px 6px 10px rgba(14, 31, 53, 0.12), 0px 12px 18px rgba(14, 31, 53, 0.2), 0px 20px 40px -1px rgba(14, 31, 53, 0.12)',
      '0px 5px 10px rgba(14, 31, 53, 0.06), 0px 10px 20px rgba(14, 31, 53, 0.12), 0px 16px 24px -1px rgba(14, 31, 53, 0.12), 0px 20px 38px -2px rgba(14, 31, 53, 0.06)',
      '0px 5px 10px rgba(14, 31, 53, 0.08), 0px 10px 20px rgba(14, 31, 53, 0.16), 0px 24px 32px -1px rgba(14, 31, 53, 0.16), 0px 32px 64px -2px rgba(14, 31, 53, 0.08)',
      '0px 5px 10px -1px rgba(14, 31, 53, 0.06), 0px 10px 20px -2px rgba(14, 31, 53, 0.1), 0px 16px 32px -3px rgba(14, 31, 53, 0.12), 0px 32px 64px -4px rgba(14, 31, 53, 0.14), 0px 40px 72px -5px rgba(14, 31, 53, 0.24)',
      '0px 3px 6px rgb(233, 233, 233), 0px 6px 12px rgb(233, 233, 233), 0px 14px 24px rgb(233, 233, 233)',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
    ],
    dark: [
      'none',
      '0px 0px 2px rgba(14, 31, 53, 0.12)',
      '0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06)',
      '0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08)',
      '0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.1), 0px 6px 12px rgba(14, 31, 53, 0.08)',
      '0px 2px 4px rgba(14, 31, 53, 0.06), 0px 6px 12px rgba(14, 31, 53, 0.08), 0px 12px 20px rgba(14, 31, 53, 0.06)',
      '0px 3px 6px rgba(14, 31, 53, 0.08), 0px 6px 12px rgba(14, 31, 53, 0.12), 0px 14px 24px rgba(14, 31, 53, 0.08)',
      // tslint:disable-next-line: max-line-length
      '0px 4px 8px rgba(14, 31, 53, 0.1), 0px 8px 16px rgba(14, 31, 53, 0.16), 0px 16px 28px -1px rgba(14, 31, 53, 0.1)',
      '0px 6px 10px rgba(14, 31, 53, 0.12), 0px 12px 18px rgba(14, 31, 53, 0.2), 0px 20px 40px -1px rgba(14, 31, 53, 0.12)',
      '0px 5px 10px rgba(14, 31, 53, 0.06), 0px 10px 20px rgba(14, 31, 53, 0.12), 0px 16px 24px -1px rgba(14, 31, 53, 0.12), 0px 20px 38px -2px rgba(14, 31, 53, 0.06)',
      '0px 5px 10px rgba(14, 31, 53, 0.08), 0px 10px 20px rgba(14, 31, 53, 0.16), 0px 24px 32px -1px rgba(14, 31, 53, 0.16), 0px 32px 64px -2px rgba(14, 31, 53, 0.08)',
      '0px 5px 10px -1px rgba(14, 31, 53, 0.06), 0px 10px 20px -2px rgba(14, 31, 53, 0.1), 0px 16px 32px -3px rgba(14, 31, 53, 0.12), 0px 32px 64px -4px rgba(14, 31, 53, 0.14), 0px 40px 72px -5px rgba(14, 31, 53, 0.24)',
      '0px 5px 10px -1px rgba(14, 31, 53, 0.06), 0px 10px 20px -2px rgba(14, 31, 53, 0.1), 0px 16px 32px -3px rgba(14, 31, 53, 0.12), 0px 32px 64px -4px rgba(14, 31, 53, 0.14), 0px 56px 84px -5px rgba(14, 31, 53, 0.32)',
      '0px 3px 6px rgb(233, 233, 233), 0px 6px 12px rgb(233, 233, 233), 0px 14px 24px rgb(233, 233, 233)',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
      'empty',
    ],
  },
  palette: {
    common: {
      dark: {
        white: '#fff',
        black: '#000',
        backDrop: '#0000004D',
        backDark: '#1E1A3D',
        primaryCommonGradient: 'linear-gradient(99.86deg, #95D347 -25.15%, #4AA720 130.02%)',
        secondaryCommonGradient: 'linear-gradient(0deg, #D2D2D2, #D2D2D2)',
      },
      light: {
        white: '#fff',
        black: '#000',
        backDrop: '#0000004D',
        backDark: '#1E1A3D',
        primaryCommonGradient: 'linear-gradient(99.86deg, #A8E063 -25.15%, #67B63A 113.43%, #56AB2F 130.02%)',
        secondaryCommonGradient: 'linear-gradient(111.19deg, #F9F9F9 5.14%, #E9E9E9 97.56%)',
      },
    },
    background: {
      light: { default: '#FFFFFF', paper: '#FAFAFA' },
      dark: { default: '#000c0f', paper: '#24204B' },
    },
    divider: { light: 'rgba(0, 0, 0, 0.12)', dark: 'rgba(255, 255, 255, 0.12)' },
    primary: {
      main: '#A8E063',
      light: '#07A00E',
      dark: '#4AA720',
    },
    secondary: {
      main: '#D2D2D2',
      light: '#F5F5F5',
      dark: '#999898',
    },
    text: {
      light: { primary: 'rgba(255,255,255,1)', secondary: 'rgba(255,255,255,0.7)', disabled: 'rgba(255,255,255,0.5)' },
      dark: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
      },
    },
    error: {
      main: '#DB0028',
      light: '#EA4847',
      dark: '#A80505',
    },
    info: {
      main: '#2196F3',
      light: '#64B5F6',
      dark: '#1976D2',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    warning: {
      main: '#FF9800',
      light: '#FFB74D',
      dark: '#F57C00',
    },
    // action: {},
  },
  shape: 30,
  states,
  components: {
    inputBase: {
      shadow: {
        active: 12,
        default: 0,
        focus: 12,
        hover: 4,
      },
    },
  },
  size: {
    component: {
      small: {
        l: 0.5,
        t: 0.5,
        r: 0.5,
        b: 0.5,
      },
      medium: {
        l: 2,
        t: 1,
        r: 2,
        b: 1,
      },
      large: {
        l: 0.5,
        t: 1,
        r: 0.5,
        b: 1,
      },
    },
    navbar: {
      open: 32,
      close: 10,
    },
    padding: {
      x: 2,
      y: 2,
    },
  },
};
