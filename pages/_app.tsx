import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, Global } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Archivo',
            src: `https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&display=swap`,
          },
        },
      
      ]}
    />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
        defaultProps={{
          Container: {
            sizes: {
              xs: 540,
              sm: 720,
              md: 960,
              lg: 1280,
              xl: 1440,
            },
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
