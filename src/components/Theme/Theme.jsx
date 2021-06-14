module.exports = {
  colors: {
    default: {
      base: 'hsl(210, 25%, 27%)',
      darker: 'hsl(210, 40%, 10%)',
      lighter: 'hsl(210, 25%, 60%)',
      // background: 'hsl(210,70%,31%)',
      mid: 'hsl(210,50%,15%)'
    },
    blue: {
      base: 'hsla(197,92%,68%,1)',
      darker: 'hsla(197, 100%, 56%,1)',
      lighter: 'hsla(198, 100%, 91%, 1)',
      lightest: '#D7F1FF',
      boxShadow: 'rgba(118,215,254,.35)'
    },
    yellow: {
      base: '#faf66b',
      darker: 'hsla(58, 100%, 46%, 1)',
      alt: '#fdd770',
      lighter: '#fffc99',
      lightest: '#fffcb3',
    },
    grays: {
      background: 'hsl(200, 16%, 97%)',
      border: 'hsl(200, 16%, 96%)',
      borderDark: 'hsl(210, 5%, 75%)',
      borderMedium: 'hsl(210, 15%, 85%)',
      textLight: `hsl(194, 15%, 85%)`,
      text: `hsl(194, 15%, 75%)`,
      textDark: `hsl(194, 10%, 70%)`,
      textDarker: `hsl(194, 5%, 60%)`,
      textDarkest: `hsl(200, 10%, 45%)`,
      boxShadow: `hsl(210, 10%, 60%)`,
      base: `hsl(210, 10%, 45%)`
    },
    accents: {
      red: 'hsl(355, 100%, 92%)',
      green: 'hsl(175, 100%, 65%)',
      blue: 'hsl(197,100%,86%)',
      yellow: 'hsl(58, 100%, 65%)',
      purple: 'hsl(240, 100%, 87%)',
      royalBlue: 'hsl(224, 96%, 65%)',
      orange: 'hsl(39, 100%, 70%)',
      dark: {
        green: 'hsl(175, 85%, 47%)',
        yellow: 'hsl(58, 95%, 48%)',
        red: 'hsl(355, 95%, 75%)',
        purple: 'hsl(240, 85%, 78%)',
        blue: 'hsl(197, 95%, 64%)'
      },
      vivid: {
        red: 'hsl(355, 100%, 78%)',
        yellow: 'hsl(58, 100%, 49%)',
        green: 'hsl(175, 100%, 50%)',
        blue: 'hsl(197, 100%, 50%)',
        purple: 'hsl(240, 100%, 80%)',
      },
      background: {
        yellow: 'hsl(58, 100%, 78%)',
        green: 'hsl(175, 100%, 91%)',
        blue: 'hsl(197, 100%, 90%)',
        purple: 'hsl(240, 100%, 96%)',
        red: 'hsl(355, 100%, 95%)',
        orange: 'hsl(39, 100%, 75%)',
        royalBlue: 'hsl(224,100%,75%)',
      },
      text: {
        red: 'hsl(355, 81%, 80%)',
        green: 'hsl(175, 70%, 62%)',
        blue: 'hsl(197, 80%, 65%)',
        yellow: 'hsl(58, 100%, 60%)',
        purple: 'hsl(240, 80%, 75%)',
      }
    }
  },
  fonts: {
    body: {
      family: 'Roboto, sans-serif',
      weights: {
        light: `300`,
        lightItalic: `300i`,
        normal: `400`,
        medium: `500`,
        bold: `700`,
        black: `900`
      }
    },
    headings: {
      family: 'Lato, sans-serif',
      weights: {
        light: `300`,
        normal: `400`,
        bold: `700`,
        black: `900`
      }
    },
    headingsAlt: {
      family: 'Arial, Helvetica, sans-serif',
      weights: {
        normal: `400`,
        bold: `700`
      }
    },
    accent: {
      family: 'Oswald',
      weights: {
        normal: `400`,
        light: `200`,
        bold: `700`
      }
    },
    sizes: {
      xxs: '.75rem',
      xs: '1.2rem',
      sm: '1.4rem',
      default: '1.6rem',
      md: '2.25rem',
      lg: '2.75rem',
      xl: '3.6rem',
      xxl: '4.5rem',
      lineHeights: {
        xs: `1em`,
        sm: `1.3em`,
        default: `1.5em`,
        md: `1.7em`,
        lg: `1.85em`
      },
    },
  },
  spacing: {
    xxl: `6rem`,
    xl: `4.5rem`,
    lg: `3rem`,
    md: `2rem`,
    default: `1.6rem`,
    sm: `1rem`,
    xs: `.4rem`,
    xxs: '.2rem',
    min: '.1rem'
  },
  layout: {
    widths: {
      default: `90%`,
      defaultMax: `96rem`,
      lg: `100%`,
      lgMax: `110rem`,
      full: `100%`,
      fullMax: `none`
    }
  },
  breakpoints: {
    max: {
      xs: `462px`,
      sm: `641px`,
      md: `768px`,
      lg: `991px`,
      xl: `1024px`
    },
    min: {
      xs: `463px`,
      sm: `642px`,
      md: `769px`,
      lg: `992px`,
      xl: `1025px`
    }
  },
}
