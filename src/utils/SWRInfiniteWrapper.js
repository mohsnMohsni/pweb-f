import useSWRInfinite  from "swr/infinite";

import { onOpen } from "../store/reducers/Notification";
import { handleStatusSuccess } from "../feature/function";

const SWRInfiniteWrapper = (props) => {
  const { url, ...prop } = props;
  /******************************************************************************
   *                            STORE
   *****************************************************************************/

  /******************************************************************************
   *                            GET KEY
   *****************************************************************************/
  const getKey = (pageIndex, previousPageData) => {
    pageIndex = pageIndex + 1;
    if (previousPageData && !previousPageData.length) return null;
    return pageIndex !== 1 && pageIndex !== 0
      ? `${url}?page=${pageIndex}`
      : url; // SWR key
  };

  /******************************************************************************
   *                            SWR
   *****************************************************************************/
  const { data, error, isValidating, setSize, size, mutate } =
    useSWRInfinite(getKey, prop);

  if (error || (data?.status && !handleStatusSuccess(data?.status))) {
    dispatch(
      'err'
    );
  }

  return {
    data,
    isError: error,
    isValidating,
    setCurrentPage: setSize,
    currentPage: size,
    mutate,
  };
};

export default SWRInfiniteWrapper;
