import { useEthers } from "@usedapp/core";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";


export const ConnectWalletButton = (props) => {
  const { account, activateBrowserWallet, deactivate, connector, error } =
    useEthers();

  const errorRef = useRef(null);

  if (error) {
    errorRef.current = { connector, error };
  } else {
    if (errorRef.current?.error && errorRef?.current.connector == connector) {
      errorRef.current = null;
    }
  }
  return (
    <>
      {account ? (
        <button mt={2} onClick={() => deactivate()}>
          Disconnect Wallet
        </button>
      ) : (
        <button
          mt={2}
          className={styles.walletBtn}
          onClick={() => activateBrowserWallet()}
          backgroundColor={errorRef.current ? "red.500" : ""}
        >
          {errorRef.current
            ? "Error: Connect Wallet (Retry)"
            : "Connect Wallet to play"}
          <FontAwesomeIcon style={{ padding: "5px" }} icon={faWallet} />
        </button>
      )}
    </>
  );
};
