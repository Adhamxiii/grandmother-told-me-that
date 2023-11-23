import { useEffect, useState } from "react";

const useScene = (initialScene) => {
  const [currentScene, setCurrentScene] = useState(initialScene);

  useEffect(() => {
    const video = document.getElementById("videoPlayer");
    video.play();
  }, []);

  const handleBranchSelect = (branchKey, branches) => {
    setCurrentScene(branches[branchKey]);
  };

  return { currentScene, handleBranchSelect };
};

export default useScene;