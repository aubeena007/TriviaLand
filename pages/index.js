import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Start from "../components/Start";
import Quiz from "../components/Quiz";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { useEthers } from "@usedapp/core";

export default function Home() {
  const [start, setStart] = useState(false);
  const { account } = useEthers();

  console.log(account, "account");
  return (
    <div className={styles.body}>
      <Head>
        <title>TriviaLand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={styles.title}>TriviaLand</h1>
        {account ? (
          <Quiz />
        ) : (
          <div className={styles.walletBtnWraper}>
            <ConnectWalletButton />
          </div>
        )}
      </div>
      {/* <ConnectWalletButton /> */}
    </div>
  );
}
