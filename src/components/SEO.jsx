import Head from 'next/head';
import * as React from 'react';

export const SITE_NAME = 'AntCoders';
export const SITE_TITLE = 'AntCoders';
export const SITE_DESCRIPTION = 'Next - Styled components/Material-ui/Redux/Typescript';
export const SITE_IMAGE = '/static/site-image.jpg';
export const SITE_AUTHOR = 'AntCoders';

export const defaultSeo = {
  metaTitle: SITE_TITLE,
  metaDescription: SITE_DESCRIPTION,
  shareImage: SITE_IMAGE,
  article: false,
};

const Seo = ({
  metaTitle = defaultSeo.metaTitle,
  metaDescription = defaultSeo.metaDescription,
  shareImage = defaultSeo.shareImage,
  article,
}) => {
  const seoWithDefaults = {
    metaTitle,
    metaDescription,
    shareImage,
    article,
  };
  const fullSeo = {
    ...seoWithDefaults,
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${SITE_NAME}`,
    // Get full image URL
    shareImage: seoWithDefaults.shareImage,
  };

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
