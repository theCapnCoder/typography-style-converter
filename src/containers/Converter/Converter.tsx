import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import { useState } from "react";
import { transformCSSCode } from "./helpers";

export const Converter = () => {
  const [reactStyle, setReactStyle] = useState<
    Array<Record<string, string | number>>
  >([]);

  const initialValues = {
    blockText: "",
  };


  const accumulateStyle = (blockText: string) => {
    setReactStyle([...reactStyle, transformCSSCode(blockText)]);
  };

  return (
    <Box>
      <Typography variant="h2">Enter CSS</Typography>

      <Box mb={2}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, action) => {
            console.log(values);
            accumulateStyle(values.blockText);
            action.resetForm();
          }}
        >
          {(FormikProps) => (
            <Form>
              <Stack direction={"row"} gap={2}>
                <TextField
                  value={FormikProps.values.blockText}
                  name="blockText"
                  onChange={FormikProps.handleChange}
                ></TextField>
                <Button type="submit" variant="contained">
                  Add
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => setReactStyle([])}
                >
                  Clear
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>

      <Paper elevation={8} sx={{ minWidth: 200, minHeight: 200 }}>
        <pre>{JSON.stringify(reactStyle, null, 2)}</pre>
      </Paper>
      <Button variant="contained" onClick={() => console.log(reactStyle)}>
        Get array
      </Button>
    </Box>
  );
};
