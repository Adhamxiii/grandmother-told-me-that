import React from 'react'
import useScene from '../hooks/useScene';
import story from '../data';
import scene4 from '../assets/scene4.mp4'
import styles from "../GlobalStyleComponent.module.css";
import Dialog from '../components/Dialog';
import { Link } from 'react-router-dom';

const Branch2A = () => {
  const { currentScene } = useScene(story.branches.branch1B.branches.branch2A.dialogue);


  return (
    <main className={styles.main}>
      <div className={styles.videoContainer}>
        <video id="videoPlayer" className={styles.video} playsInline autoPlay>
          <source src={scene4} type="video/mp4" />
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
}

export default Branch2A
