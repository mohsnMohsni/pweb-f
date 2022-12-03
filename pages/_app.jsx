import React, { useEffect, useState } from "react";
import NextHead from "next/head";
import { SWRConfig } from "swr";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from '@emotion/react';

import { createCustomTheme } from "../src/styles/styles";
import SnackbarProvider from "../src/providers/SnackbarProvider";
import "../src/styles/scss/animations.scss"
import "../src/fonts/fonts.scss";
import NextError from "../src/sections/NextError";
import { _http } from "../src/services/http";
import createEmotionCache from '../src/createEmotionCache';
import Loading from "../src/components/Loading";


const clientSideEmotionCache = createEmotionCache();


function AppWrapper({ Component, emotionCache = clientSideEmotionCache, pageProps }) {

  const theme = createCustomTheme('DARK');
  const [isLoading, setIsLoading] = useState(true);
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    setIsLoading(false);
    console.log(`
        ███╗   ███╗ ██████╗ ██╗  ██╗███████╗███████╗███╗   ██╗
        ████╗ ████║██╔═══██╗██║  ██║██╔════╝██╔════╝████╗  ██║
        ██╔████╔██║██║   ██║███████║███████╗█████╗  ██╔██╗ ██║
        ██║╚██╔╝██║██║   ██║██╔══██║╚════██║██╔══╝  ██║╚██╗██║
        ██║ ╚═╝ ██║╚██████╔╝██║  ██║███████║███████╗██║ ╚████║
        ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝
      `)
  }, [])

  return (
    <>
      <NextHead>
        <title>Mohsen Mohseni</title>
        <link rel="icon" href="/static/images/favicon-16x16.ico" />
      </NextHead>
      <CacheProvider value={emotionCache}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>
              <SWRConfig
                value={{ fetcher: (url) => _http(url, {}) }}
              >
                {getLayout(
                  pageProps?.error?.errorCode ? (
                    <>
                      <Loading />
                      <NextError data={pageProps?.error} />
                      <Component {...pageProps} />
                    </>
                  ) : (
                    <>
                      {isLoading && <Loading />}
                      <Component setIsLoading={setIsLoading} {...pageProps} />
                    </>
                  )
                )}
              </SWRConfig>
            </SnackbarProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </CacheProvider>
    </>
  )
}

export default AppWrapper;
