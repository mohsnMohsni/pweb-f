import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { ServerStyleSheets } from '@mui/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';

import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_IMAGE, SITE_NAME, SITE_TITLE } from '../src/components/SEO';

function getCache() {
  const cache = createCache({ key: 'css', prepend: true });
  cache.compat = true;
  return cache;
}

let prefixer;
let cleanCSS;
if (process.env.NODE_ENV === 'production') {
  /* eslint-disable global-require */
  const postcss = require('postcss');
  const autoprefixer = require('autoprefixer');
  const CleanCSS = require('clean-css');
  /* eslint-enable global-require */

  prefixer = postcss([autoprefixer]);
  cleanCSS = new CleanCSS();
}

/**
 * TODO:
 * getCache
 * GOOGLE_ID
 * manifest
 * theme-color
 * apple-touch-icon
 * canonical
 * alternate
 * window.ga
 */
class MyDocument extends Document {
  render() {
    const { canonical, userLanguage } = this.props;

    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta name="author" content={SITE_AUTHOR} />
          <link rel="icon" href="/static/images/Logo.svg" />
          <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Set up our styled-components and material-ui style sheets here
  // Render app and page and get the context of the page with collected side effects.
  const muiSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  const cache = getCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => muiSheets.collect(<App {...props} />),
      enhanceComponent: (Component) => (props) =>
        (
          <CacheProvider value={cache}>
            <Component {...props} />
          </CacheProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  let css = muiSheets.toString();
  // It might be undefined, e.g. after an error.
  if (css && process.env.NODE_ENV === 'production') {
    const result1 = await prefixer.process(css, { from: undefined });
    css = result1.css;
    css = cleanCSS.minify(css).styles;
  }

  return {
    ...initialProps,
    userLanguage: ctx.query.userLanguage || 'en',
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {muiSheets.getStyleElement()}
      </React.Fragment>,
      ...emotionStyleTags,
      // <style id="material-icon-font" key="material-icon-font" />,
      // <style id="font-awesome-css" key="font-awesome-css" />,
      ...emotionStyleTags,
      <style
        id="jss-server-side"
        key="jss-server-side"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: css }}
      />,
      // <style id="app-search" key="app-search" />,
      // <style id="prismjs" key="prismjs" />,
      <style id="insertion-point-jss" key="insertion-point-jss" />,
    ],
  };
};

export default MyDocument;
