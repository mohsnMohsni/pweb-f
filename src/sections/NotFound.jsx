import { makeStyles } from "@mui/styles";
import {  Typography } from "@mui/material";
import { Box } from "@mui/system";
import {useTranslation} from "react-i18next";


const NotFound = (props) => {
  /******************************************************************************
   *                            TRANSLATE
   *****************************************************************************/
  const { t } = useTranslation("translate");
  const webSiteConstant = t("webSiteConstant", { returnObjects: true });

  /******************************************************************************
   *                            Make Styles
   *****************************************************************************/
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      "& h2": {
        fontSize: "8rem",
      },
    },
    anim: {
      width: "100%",
      height: "100%",
      backgroundImage:
        "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
  }));
  const classes = useStyles(props);

  return (
    <>
      <Box className={classes.root}>
        <Box sx={{ width: "100%", height: "60%" }}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            {webSiteConstant?.notFoundCode}
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            {webSiteConstant?.notFoundText}
          </Typography>
          <Box className={classes.anim} />
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
