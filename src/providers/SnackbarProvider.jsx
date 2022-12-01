// provider for snack bar notification
import * as React from "react";
import { Alert, Box, Snackbar } from "@mui/material";

import { useDispatch, useSelector } from "../../src/store/reducers";
import { onClose } from "../../src/store/reducers/Notification";

/******************************************************************************
 *                           Component definition
 *****************************************************************************/

export default function SnackbarProvider(props) {
  const notification = useSelector((state) => state?.notification);
  const dispatch = useDispatch();

  return (
    <Box>
      <Box>
        {notification.messages.map(
          (notification, i) => (
            <Snackbar
              key={notification.id}
              sx={{
                bottom: i * 70 + "px !important",
                transition: (theme) => theme.transitions.create("all"),
                mb: 3,
                width: 300,
                "& .MuiAlert-icon": {
                  margin: (theme) => theme?.spacing("auto", 1),
                },
              }}
              open={notification.open}
              autoHideDuration={5000}
              onClose={(
                event,
                reason
              ) => {
                if (reason === "clickaway") {
                  return;
                }
                dispatch(onClose(notification.id));
              }}
            >
              <Alert
                sx={{
                  width: 1,
                  borderRadius: (theme) => theme.shape.borderRadius + "px",
                }}
                elevation={6}
                variant="filled"
                severity={notification?.severity || "success"}
              >
                {typeof notification?.message === "string"
                  ? notification?.message
                  : ""}
              </Alert>
            </Snackbar>
          )
        )}
      </Box>
      {props.children}
    </Box>
  );
}
// for showing notifications dispatch new message to redux notification
