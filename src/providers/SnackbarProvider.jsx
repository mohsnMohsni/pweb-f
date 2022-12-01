// provider for snack bar notification
import * as React from "react";
import { Box } from "@mui/material";


/******************************************************************************
 *                           Component definition
 *****************************************************************************/

export default function SnackbarProvider(props) {

  return (
    <Box>
      {props.children}
    </Box>
  );
}
