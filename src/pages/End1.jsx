import React from "react";
import end1 from "../assets/end1.mp4";
import Dialog from "../components/Dialog";
import story from "../data";
import useScene from "../hooks/useScene";
import styles from "../GlobalStyleComponent.module.css";

const End1 = () => {
  const { currentScene } = useScene(story.branches.branch1A.end.monologue);

  return (
    <main className={styles.main}>
      <div className={styles.videoContainer}>
        <video id="videoPlayer" className={styles.video} playsInline autoPlay>
          <source src={end1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Dialog>
        <div className={styles.dialog}>
          <div className={styles.dialog__content}>
            <h4 className={styles.character}>Detective Dottie</h4>
            <p className={styles.text}>{currentScene}</p>
          </div>
        </div>
      </Dialog>
    </main>
  );
};

export default End1;
