import { STATUS_OK, STATUS_SUCCESS } from "../constants/env";

const handleColorStatus = (status) => {
  switch (status) {
    case "rejected":
      return "error";
    case "success":
      return "success";
    case "pending":
      return "warning";
    default:
      return "error";
  }
};

const stringFormatTable = (e, limit = 8) => {
  return e?.length > limit ? `${e.substr(0, limit)} ...` : e;
};

/******************************************************************************
 *                          STATUS SUCCESS
 *****************************************************************************/
const handleStatusSuccess = (status) => {
  let statusSuccess = [STATUS_SUCCESS, STATUS_OK];
  return statusSuccess.some((i) => i === status);
};

export {
  handleColorStatus,
  stringFormatTable,
  handleStatusSuccess,
};
