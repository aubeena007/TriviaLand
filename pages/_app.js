import "../styles/globals.css";
import { DAppProvider } from "@usedapp/core";

const config = {};

function MyApp({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;
