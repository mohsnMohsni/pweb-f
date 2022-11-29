import { useTranslation } from "react-i18next";
import {Typography} from "@mui/material";
import Link from 'next/link'
import {useRouter} from "next/router";
import i18next from "i18next";

const Test = () => {
    const { t } = useTranslation("translate");
    const webSiteConstant = t("webSiteConstant", { returnObjects: true });
    let router = useRouter();
    return(
        <>
            <Typography><Link href='/test' locale={router.locale === 'en' ? 'fa' : 'en'}><a onClick={() => {
                i18next.changeLanguage(router.locale === 'en' ? 'fa' : 'en')
            }}>click me !</a></Link></Typography>
            {webSiteConstant.store}</>
    )
}

export default Test