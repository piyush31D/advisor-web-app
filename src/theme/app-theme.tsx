import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import IndexRoute from 'src/routes';

const AppWithTheme: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2978EF'
      },

    },
    overrides: {

      MuiButton: {
        root: {
          borderRadius: 8
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
        }
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
