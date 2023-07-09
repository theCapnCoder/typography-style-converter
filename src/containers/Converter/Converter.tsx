import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import transformCSSCode from "./helpers";
import { countSimilarObjects } from "./helpers/countSimilarObjects";
import { deletePropsFromObjects } from "./helpers/deletePropsFromObjects";

export const Converter = () => {
  const [reactStyle, setReactStyle] = useState<any>([]);
  const [repeatStyles, setRepeatStyles] = useState<any>([]);
  const [clearStyles, setClearStyles] = useState<any>([]);

  // Array<Record<string, string | number>>

  const initialValues = {
    blockText: "",
  };

  const accumulateStyle = (blockText: string) => {
    setReactStyle([...reactStyle, transformCSSCode(blockText)]);
  };

  useEffect(() => {
    setRepeatStyles(countSimilarObjects(reactStyle));
  }, [reactStyle]);

  useEffect(() => {
    setClearStyles(repeatStyles);
  }, [repeatStyles]);

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

      <Stack direction={"row"} gap={2}>
        <Box>
          <Button variant="contained" onClick={() => console.log(reactStyle)}>
            Get all styles
          </Button>
          <Paper elevation={8} sx={{ px: 2, minWidth: 200, minHeight: 200 }}>
            <pre>{JSON.stringify(reactStyle, null, 2)}</pre>
          </Paper>
        </Box>

        <Box>
          <Button variant="contained" onClick={() => console.log(repeatStyles)}>
            Get repeat styles
          </Button>
          <Paper elevation={8} sx={{ px: 2, minWidth: 200, minHeight: 200 }}>
            <pre>{JSON.stringify(repeatStyles, null, 2)}</pre>
          </Paper>
        </Box>

        <Box>
          <Button variant="contained" onClick={() => console.log(repeatStyles)}>
            Get clear styles
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => {
              setClearStyles(
                deletePropsFromObjects(repeatStyles, ["fontFamily"])
              );
            }}
          >
            Delete fontFamily
          </Button>

          <Paper elevation={8} sx={{ px: 2, minWidth: 200, minHeight: 200 }}>
            <pre>{JSON.stringify(clearStyles, null, 2)}</pre>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
};
