import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";

export const Converter = () => {
  const initialValues = {
    text: "",
  };

  return (
    <Box>
      <Typography variant="h2">Enter CSS</Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {(FormikProps) => (
          <Stack direction={"row"} gap={2}>
            <TextField></TextField>
            <Button variant="contained">Add</Button>
          </Stack>
        )}
      </Formik>
    </Box>
  );
};
