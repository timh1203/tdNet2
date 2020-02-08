// PACKAGES
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Abril Fatface';
    src: url('/fonts/Abril_Fatface/AbrilFatface-Regular.ttf');
  }
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/RaleWay/Raleway-Black.ttf');
    src: url('/fonts/RaleWay/Raleway-BlackItalic.ttf');
    src: url('/fonts/RaleWay/Raleway-Bold.ttf');
    src: url('/fonts/RaleWay/Raleway-BoldItalic.ttf');
    src: url('/fonts/RaleWay/Raleway-ExtraBold.ttf');
    src: url('/fonts/RaleWay/Raleway-ExtraBoldItalic.ttf');
    src: url('/fonts/RaleWay/Raleway-ExtraLight.ttf');
    src: url('/fonts/RaleWay/Raleway-ExtraLightItalic.ttf');
    src: url('/fonts/RaleWay/Raleway-Italic.ttf');
    src: url('/fonts/RaleWay/Raleway-Light.ttf');
    src: url('/fonts/RaleWay/Raleway-LightItalic.ttf');
    src: url('/fonts/RaleWay/Raleway-Medium.ttf');
    src: url('/fonts/RaleWay/Raleway-MediumItalic.ttf');
    src: url('/fonts/RaleWay/Raleway-Regular.ttf');
    src: url('/fonts/RaleWay/Raleway-SemiBold.ttf');
    src: url('/fonts/RaleWay/Raleway-SemiBoldItalic.ttf');
    src: url('/fonts/RaleWay/Raleway-Thin.ttf');
    src: url('/fonts/RaleWay/Raleway-ThinItalic.ttf');
  }
`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
        </Head>
        <body style={{ margin: "0" }}>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
