import useSWR from "swr";

import { onOpen } from "../store/reducers/Notification";
import { handleStatusSuccess } from "../feature/function";

const SWRWrapper = (props) => {
  const { url, ...prop } = props;
  /******************************************************************************
   *                            STORE
   *****************************************************************************/

  /******************************************************************************
   *                            SWR
   *****************************************************************************/
  const { data, error, mutate } = useSWR(url, prop);

  if (error || (data?.status && !handleStatusSuccess(data?.status))) {
    dispatch(
      'err'
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
