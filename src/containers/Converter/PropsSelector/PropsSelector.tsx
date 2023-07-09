import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { useEffect } from "react";

type State = {
  fontFamily: boolean;
  fontStyle: boolean;
};

interface Props {
  onSelect: (state: State) => void;
}

export const PropsSelector: React.FC<Props> = ({ onSelect }) => {
  const [state, setState] = React.useState({
    fontFamily: false,
    fontStyle: false,
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

  const { fontFamily, fontStyle } = state;

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
                checked={fontStyle}
                onChange={handleChange}
                name="fontStyle"
              />
            }
            label="fontStyle"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
