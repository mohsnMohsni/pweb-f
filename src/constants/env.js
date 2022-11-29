export const DEV = process.env.NODE_ENV !== "production";

export const WAITING_WITH = 3_000;
export const REVALIDATE_TIME = 40;
export const STATUS_OK = 200;
export const STATUS_SUCCESS = 201;
export const PAGE_HAS_ERROR_CODE = [404, 500];

/******************************************************************************
 *                            MSG Yup
 *****************************************************************************/
export const REQUIRED = "THIS FIELD IS REQUIRED";
export const BE_LESS = (props) => ` کمتر از ${props} کاراکتر باشد `;
export const BE_MORE = (props) => ` بیشتر از ${props} کاراکتر باشد `;
export const FILE_TOO_LARGE = "حجم فایل بیشتر از مقدار تعیین شده است .";
export const AVATAR_SIZE = 5_000_000;
export const DOCUMENT_SIZE = 5_000_000;
export const NORMAL_MONTHS_RANSOM = 4_800_000_000;
export const UnNORMAL_MONTHS_RANSOM = 6_400_000_000;
export const ONE_OF = "مورد انتخاب شده معتبر نیست .";
export const NOT_VALID = "معتبر نیست";
export const PER_PAGE_ITEMS = 20;
export const MINUTE = 60;
export const SECOND = 1_000;
export const MINUTE_PER_MS = 60_000;
