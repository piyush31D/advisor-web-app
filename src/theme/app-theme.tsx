import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import IndexRoute from 'src/routes';

const AppWithTheme: React.FC = () => {
  const theme = createMuiTheme({
    typography:{
      fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    palette: {
      primary: {
        main: '#005FEB'
      },

    },
    overrides: {
      MuiRadio:{
        root:{
          padding:5
        }
      },
      MuiSvgIcon:{
        root:{
          width:'1.2rem',
          height:'1.2rem'
        },
      },
      MuiFormControlLabel:{
        root:{
          marginLeft:-5
        }
      },
      MuiButton: {
        root: {
          borderRadius: 8,
          fontSize:'var(--font-regular)'
        },
        label: {
          textTransform: 'none',
          fontWeight: 'bold'
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: '#5393F2',
          },
          "&:active": {
            backgroundColor: '#1868DF'
          }
        },
        text: {
          color: '#fff',
          "&:active": {
            opacity: .8
          }
        },
        endIcon: {
          marginLeft: 5,
          marginRight: 0
        },
      },
      MuiCheckbox: {
        root: {
          color: '#bbb',
          fontSize: 18
        },
        checked: {
          color: 'var(--accent)'
        }
      },
      MuiFilledInput: {
        root: {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        },
        underline: {
          '&:before': {
            display: 'none'
          },
          '&:after': {
            display: 'none'
          }
        },
        focused:{
          backgroundColor:'transparent',
          border:'2px solid red'
        }
      },
      MuiChip:{
        root:{
          fontSize:'1rem'
        }
      },
      MuiTypography:{
        body2:{
          fontSize:13
        }
      }
    },
    props: {
      MuiButton: {
        disableElevation: true,
        disableRipple: true,
      },
      MuiCheckbox: {
        icon: <span className="pficon-unchecked-round" />,
        checkedIcon: <span className="pficon-checked-round" />,
        size: "small"
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <IndexRoute />
    </ThemeProvider>
  );
}

export default AppWithTheme;
