import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';

const useInputStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&$focused': {
        backgroundColor: 'transparent',
      }
    },
    focused: {},
  }),
);

function StyledInput(props: TextFieldProps) {
  const classes = useInputStyles();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true } as Partial<OutlinedInputProps>}
      {...props}
    />
  );
}

export const useStyles = makeStyles({
  headline: {
    fontWeight: 'bold',
    alignSelf: 'stretch',
    borderBottom: '1px solid var(--border)',
    padding: '30px 80px 20px 80px',
    textAlign: 'center'
  },
  subHeadline: {
    fontSize: 16,
    paddingTop: 10
  },
  inputlabel: {
    margin: '10px 15px'
  },
  button: {
    borderRadius: 15,
    fontSize: 16,
    padding: '12px 0',
    margin: '5px 0 20px 0'
  },
  smallgutter: {
    marginTop: 30
  }
});


export default StyledInput