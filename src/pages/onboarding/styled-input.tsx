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

const StyledInput = (props: TextFieldProps) => {
  const classes = useInputStyles();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true } as Partial<OutlinedInputProps>}
      {...props}
    />
  );
}
export const useStyles = makeStyles({
  bold: {
    fontWeight: 'bold',
  },
  subHeadline: {
    fontSize: 16,
    paddingTop: 10,
    fontWeight:500,
  },
  sandwitchText: {
    margin: '0 0 15px 0',
    fontWeight:500
  },
  button: {
    borderRadius: 15,
    fontSize: 16,
    padding: '12px 0',
    marginTop:10
  },
  smallgutter: {
    marginTop: 30
  }
});

export default StyledInput