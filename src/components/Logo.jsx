import { Box, CardMedia } from "@mui/material";
/******************************************************************************
 *                           Component definition
 *****************************************************************************/
const Logo= (props) => {
  return (
    <Box
      ref={props.ref}
      sx={{
        width: props?.width || "max-content",
        maxHeight: props?.height,
        ...props.sx,
        display: "flex",
      }}
    >
      <CardMedia
        sx={{ objectFit: "contain", width: "auto" }}
        component="img"
        src="/static/images/svg/logoTorgay.svg"
        alt="logo torgay"
      />
    </Box>
  );
};

export default Logo;
