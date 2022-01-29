import React, { useState } from "react";
import { useEthers } from "@usedapp/core";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faUndo } from "@fortawesome/free-solid-svg-icons";

const GameOver = ({ pts }) => {
  const { account } = useEthers();

  const refreshPage = () => window.location.reload();
  const [loading, setLoading] = useState(false);

  async function claimNFT(score) {
    setLoading(true);

    await fetch("/api/mint", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        account,
        score: score,
      }),
    });

    setLoading(false);
  }

  return (
    <>
      <title>Game Over</title>
      <p className={styles.gameover}>You did {pts} out of 5!</p>
      <div className={styles.claimContainer}>
        {pts != 0 ? (
          <div>
            <button className={styles.claimNFT} onClick={() => claimNFT(pts)}>
              Claim your NFT
              <FontAwesomeIcon style={{ padding: "5px" }} icon={faGift} />
            </button>
            <button className={styles.retry_wallet} onClick={refreshPage}>
              <FontAwesomeIcon style={{ padding: "5px" }} icon={faUndo} />
            </button>
          </div>
        ) : (
          <button className={styles.retry_wallet} onClick={refreshPage}>
            Retry
          </button>
        )}
      </div>
    </>
  );
};

export default GameOver;
