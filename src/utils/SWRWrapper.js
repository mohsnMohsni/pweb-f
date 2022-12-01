import useSWR from "swr";
import { useDispatch } from "react-redux";

import { onOpen } from "../store/reducers/Notification";
import { handleStatusSuccess } from "../feature/function";

const SWRWrapper = (props) => {
  const { url, ...prop } = props;
  /******************************************************************************
   *                            STORE
   *****************************************************************************/
  const dispatch = useDispatch();

  /******************************************************************************
   *                            SWR
   *****************************************************************************/
  const { data, error, mutate } = useSWR(url, prop);

  if (error || (data?.status && !handleStatusSuccess(data?.status))) {
    dispatch(
      onOpen({
        message: error?.message || data?.response?.data?.msg,
        severity: "error",
      })
    );
  }

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default SWRWrapper;
