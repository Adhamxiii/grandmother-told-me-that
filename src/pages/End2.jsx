import React from "react";
import useScene from "../hooks/useScene";
import story from "../data";
import end2 from "../assets/end2.mp4";
import styles from "../GlobalStyleComponent.module.css";
import Dialog from "../components/Dialog";

const End2 = () => {
  const { currentScene } = useScene(
    story.branches.branch1B.branches.branch2B.end.monologue
  );

  return (
    <main className={styles.main}>
      <div className={styles.videoContainer}>
        <video id="videoPlayer" className={styles.video} playsInline autoPlay>
          <source src={end2} type="video/mp4" />
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

export default End2;
