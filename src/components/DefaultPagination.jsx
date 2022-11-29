import React  from "react";
import { Pagination,  } from "@mui/lab";
import { makeStyles } from "@mui/styles";

const DefaultPagination = (props) => {
  /******************************************************************************
   *                            Make Styles
   *****************************************************************************/
  const useStyles = makeStyles((theme) => ({
    root: {
      "& button.Mui-selected": {
        color: theme.palette.text.primary,
        background: theme.palette.primary.main,
        borderRadius: 10,
      },
    },
  }));

  const classes = useStyles(props);

  return (
    <Pagination
      count={props.count || undefined}
      color="primary"
      shape="rounded"
      defaultPage={props?.selected}
      className={classes.root}
      onChange={props?.handleChange}
      {...props?.paginationProps}
    />
  );
};

export default DefaultPagination;
