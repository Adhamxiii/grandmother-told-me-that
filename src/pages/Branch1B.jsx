import React from "react";
import useScene from "../hooks/useScene";
import story from "../data";
import scene3 from "../assets/scene3.mp4";
import Dialog from "../components/Dialog";
import { Link } from "react-router-dom";
import styles from "../GlobalStyleComponent.module.css";

const Branch1B = () => {
  const { currentScene } = useScene(story.branches.branch1B.dialogue);

  return (
    <main className={styles.main}>
      <div className={styles.videoContainer}>
        <video id="videoPlayer" className={styles.video} playsInline autoPlay>
          <source src={scene3} type="video/mp4" />
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
          {Object.entries(story.branches.branch1B.branches).map(
            ([branchKey, branch]) => (
              <div key={branchKey} className={styles.branch}>
                <Link
                  to={`/story/branch1B/${branchKey}`}
                  className={styles.branchText}
                >
                  {branch.description}
                </Link>
              </div>
            )
          )}
        </div>
      </Dialog>
    </main>
  );
};

export default Branch1B;
