import React, { useState, useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import NextHead from "next/head";
import { persistor, wrapperRedux } from "../src/store/store";
import { createCustomTheme } from "../src/styles/styles";
import { useSelector } from "../src/store/reducers";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import SnackbarProvider from "../src/providers/SnackbarProvider";
import { CacheProvider } from '@emotion/react';
import "../src/styles/scss/animations.scss"
import "../src/fonts/fonts.scss";
import NextError from "../src/sections/NextError";
import { SWRConfig } from "swr";
import { _http } from "../src/services/http";
import createEmotionCache from '../src/createEmotionCache';


const clientSideEmotionCache = createEmotionCache();


function AppWrapper({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  console.log(`
      ███╗   ███╗ ██████╗ ██╗  ██╗███████╗███████╗███╗   ██╗
      ████╗ ████║██╔═══██╗██║  ██║██╔════╝██╔════╝████╗  ██║
      ██╔████╔██║██║   ██║███████║███████╗█████╗  ██╔██╗ ██║
      ██║╚██╔╝██║██║   ██║██╔══██║╚════██║██╔══╝  ██║╚██╗██║
      ██║ ╚═╝ ██║╚██████╔╝██║  ██║███████║███████╗██║ ╚████║
      ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝
    `);

  const settings = useSelector((state) => state.settings);
  const [theme, setTheme] = useState(createCustomTheme(settings.theme));

  useEffect(() => {
    const rawTheme = createCustomTheme(settings.theme);
    setTheme(rawTheme);
  }, [settings.theme]);

  return (
    <>
      <NextHead>
        <title>Mohsen Mohseni</title>
        <link rel="icon" href="/static/images/favicon-16x16.ico" />
      </NextHead>
      <CacheProvider value={emotionCache}>
        <PersistGate
          persistor={persistor}
          loading={<div>Loading</div>}
        >
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
                        <NextError data={pageProps?.error} />
                        <Component {...pageProps} />
                      </>
                    ) : (
                      <Component {...pageProps} />
                    )
                  )}
                </SWRConfig>
              </SnackbarProvider>
            </ThemeProvider>
          </StyledEngineProvider>
        </PersistGate>
      </CacheProvider>
    </>
  )
}

export default wrapperRedux.withRedux(AppWrapper);
