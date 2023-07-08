import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import React from "react";

export const Converter = () => {
  const initialValues = {
    blockText: "",
  };


  return (
    <Box>
      <Typography variant="h2">Enter CSS</Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {(FormikProps) => (
          <Form>
            <Stack direction={"row"} gap={2}>
              <TextField name="blockText" onChange={FormikProps.handleChange}></TextField>
              <Button type="submit" variant="contained">
                Add
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
