import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { useEffect } from "react";

type State = {
  fontFamily: boolean;
  fontSize: boolean;
};

interface Props {
  onSelect: (state: State) => void;
}

export const PropsSelector: React.FC<Props> = ({ onSelect }) => {
  const [state, setState] = React.useState({
    fontFamily: false,
    fontSize: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    onSelect(state);
  }, [state, onSelect]);

  const { fontFamily, fontSize } = state;

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign props</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={fontFamily}
                onChange={handleChange}
                name="fontFamily"
              />
            }
            label="fontFamily"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={fontSize}
                onChange={handleChange}
                name="fontSize"
              />
            }
            label="fontSize"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
