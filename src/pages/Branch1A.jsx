import React from "react";
import styles from "../GlobalStyleComponent.module.css";

import Dialog from "../components/Dialog";

import { Link } from "react-router-dom";
import scene2 from "../assets/scene2.mp4";
import story from "../data";
import useScene from "../hooks/useScene";

const Branch1A = () => {
  const { currentScene } = useScene(story.branches.branch1A.dialogue);

  return (
    <main className={styles.main}>
      <div className={styles.videoContainer}>
        <video id="videoPlayer" className={styles.video} playsInline autoPlay>
          <source src={scene2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Dialog>
        <div className={styles.dialog}>
          {currentScene.map((scene, index) => (
            <div key={index} className={styles.dialog__content}>
              <h4 className={styles.character}>{scene.character}</h4>
              <p className={styles.text}>{scene.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.branches}>
          <div className={styles.branch}>
            <Link to="/story/end1" className={styles.branchText}>
              {story.branches.branch1A.end.title}
            </Link>
          </div>
        </div>
      </Dialog>
    </main>
  );
};

export default Branch1A;
