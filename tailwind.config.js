module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{vue,ts}'],
  theme: {
    colors: {
      primary: {
        1: '#e6f7ff',
        2: '#bae7ff',
        3: '#91d5ff',
        4: '#69c0ff',
        5: '#40a9ff',
        6: '#1890ff',
        7: '#096dd9',
        8: '#0050b3',
        9: '#003a8c',
        10: '#002766',
      },
      gray: {
        2: '#fafafa',
        3: '#f5f5f5',
        4: '#f0f0f0',
        5: '#d9d9d9',
        6: '#bfbfbf',
        7: '#8c8c8c',
        8: '#595959',
        9: '#434343',
        10: '#262626',
        11: '#1f1f1f',
        12: '#141414',
      },
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      current: '#000000d9',
      disabled: '#00000040',
    },
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    spacing: {
      px: '1px',
      0: '0px',
      4: '4px',
      8: '8px',
      15: '15px',
      16: '16px',
    },
    lineHeight: {
      normal: '1.5715',
    },
    borderRadius: {
      DEFAULT: '2px',
    },
  },
};
