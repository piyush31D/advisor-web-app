import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import IndexRoute from 'src/routes';
import { setAuthorizationHeader } from 'src/utils/axios';
import { useSelector } from 'react-redux';
import { IState } from 'src/store/config';

const AppWithTheme: React.FC = () => {
  const authReducer = useSelector((state: IState) => state.authReducer);
  const [initialSetup, setInitialSetup] = useState<boolean>(false);
  const theme = createMuiTheme({
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "roboto", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    palette: {
      primary: {
        main: '#005FEB'
      },
    },
    overrides: {
      MuiAvatar: {
        colorDefault: {
          color: '#747474'
        }
      },
      MuiSlider: {
        root: {
          color: 'var(--slider-color)'
        }
      },
      MuiRadio: {
        root: {
          padding: 5
        }
      },
      MuiSvgIcon: {
        root: {
          width: '1.2rem',
          height: '1.2rem'
        },
      },
      MuiFormControlLabel: {
        root: {
          marginLeft: -5
        }
      },
      MuiButton: {
        root: {
          borderRadius: 8,
          fontSize: 'var(--font-regular)'
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
          color: 'var(--checkbox-unchecked)',
          fontSize: 18,
          '&:checked': {
            color: 'var(--accent)'
          }
        }
      },
      MuiFilledInput: {
        root: {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent'
          },
          '&:focused': {
            backgroundColor: 'transparent',
            border: '2px solid red'
          }
        },
        underline: {
          '&:before': {
            display: 'none'
          },
          '&:after': {
            display: 'none'
          }
        }
      },
      MuiChip: {
        root: {
          fontSize: '1rem',
          borderRadius: 5,
          backgroundColor: 'var(--accent-shade)'
        },
        deletable: {
          fontWeight: 600,
          color: 'var(--accent)',
          marginRight: 10,
          '&:active': {
            backgroundColor: 'var(--accent-shade)',
            opacity: 0.8
          },
          '&:focus': {
            backgroundColor:'var(--accent-shade)',
          }
        },
        deleteIcon:{
          color:'var(--accent)',
          height:18,
          width:18,
          '&:hover':{
            color:'var(--accent)',
            opacity:0.8
          }
        }
      },
      MuiTypography: {
        root: {
          color: 'var(--text-primary)'
        },
        body2: {
          fontSize: 13
        },
        h5: {
          fontWeight: 600,
          fontSize: 'var(--font-large)'
        },
        h6: {
          fontWeight: 600,
          fontSize: 'var(--font-semilarge)'
        }
      },
      MuiPaper: {
        root: {
          backgroundColor: 'var(--background-primary)'
        },
        rounded: {
          borderRadius: 5,
        },
        elevation8: {
          boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.1), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)'
        }
      },
      MuiMenuItem:{
        root:{
          color:'var(--text-primary)',
          '&:hover':{
            backgroundColor:'var(--background-secondary)'
          }
        }
      },
      MuiBreadcrumbs:{
        root:{
          color:'var(--text-secondary)'
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

  useEffect(() => {
    if (authReducer) {
      if (authReducer.token) {
        setAuthorizationHeader(authReducer.token);
      } else {
        setAuthorizationHeader();
      }
      //TODO: Why child is rendering before this
      //This was done to stop making api call before axios header setup
      setInitialSetup(true);
    }
  }, [authReducer]);

  return (
    <ThemeProvider theme={theme}>
      {initialSetup && <IndexRoute />}
    </ThemeProvider>
  );
}

export default AppWithTheme;
