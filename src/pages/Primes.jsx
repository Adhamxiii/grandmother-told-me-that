import React, { useEffect, useState } from "react";
import styles from "../GlobalStyleComponent.module.css";
import scene1 from "../assets/scene1.mp4";
import Dialog from "../components/Dialog";

import story from "../data";
import { Link } from "react-router-dom";
import useScene from "../hooks/useScene";

const Primes = () => {
  const { currentScene, handleBranchSelect } = useScene(story.scene1);

  return (
    <main className={styles.main}>
      <div className={styles.videoContainer}>
        <video id="videoPlayer" className={styles.video} playsInline autoPlay>
          <source src={scene1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Dialog>
        <div className={styles.dialog__content}>
          <h4 className={styles.character}>{currentScene.character}</h4>
          <p className={styles.text}>{currentScene.text}</p>
        </div>
        <div className={styles.branches}>
          {Object.entries(story.branches).map(([branchKey, branch]) => (
            <div
              key={branchKey}
              className={styles.branch}
              onClick={() => handleBranchSelect(branchKey)}
            >
              <Link to={`/story/${branchKey}`} className={styles.branchText}>
                {branch.description}
              </Link>
            </div>
          ))}
        </div>
      </Dialog>
    </main>
  );
};

export default Primes;
