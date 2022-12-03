import Error from "next/error";
import { useTranslation } from "react-i18next";

import { PAGE_HAS_ERROR_CODE } from "../constants/env";


const NextError = (props) => {
  /******************************************************************************
   *                            translate
   *****************************************************************************/
  const { t } = useTranslation("translate");
  const webSiteConstant = t("webSiteConstant", { returnObjects: true });

  /******************************************************************************
   *                            STORE
   *****************************************************************************/
  const dispatch = useDispatch();

  /******************************************************************************
   *                            FUNCTION
   *****************************************************************************/
  const handleStatusError = () => {
    if (PAGE_HAS_ERROR_CODE.some((e) => e === props?.data?.errorCode)) {
      return true;
    } else {
      if (typeof window !== "undefined") {
        'err'
      }
      return false;
    }
  };
  return handleStatusError() ? (
    <Error
      statusCode={Number(props?.data?.errorCode) || 500}
      title={props?.data?.errorMsg || statusText?.defaultErrorText}
    />
  ) : (
    <></>
  );
};

export default NextError;
