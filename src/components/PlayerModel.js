import {
  FXAASkinViewer,
  createOrbitControls,
  WalkingAnimation,
  RotatingAnimation,
} from "skinview3d";
import { useEffect, useState } from "react";
const PlayerModel = () => {
  const [animate, setAnimate] = useState(true);
  const [showCape, setCape] = useState(true);
  useEffect(() => {
    let skinViewer = new FXAASkinViewer({
      canvas: document.getElementById("skin_container"),
      width: 300,
      height: 400,
      skin: "/NotClay.png",
    });

    skinViewer.loadCape(null);
    let control = createOrbitControls(skinViewer);
    control.enableRotate = true;
    control.enableZoom = false;
    control.enablePan = true;
    let walk = skinViewer.animations.add(WalkingAnimation);
    let rotate = skinViewer.animations.add(RotatingAnimation);
    walk.paused = !animate;
    rotate.paused = !animate;
    walk.speed = 0.5;
    rotate.speed = 0.2;
  }, [animate]);

  return (
    <div className="mx-auto mt-2 p-2 rounded bg-gray-700">
      <button
        className="text-gray-700 dark:text-white dark:bg-gray-500 mx-1 bg-gray-200 hover:bg-gray-400 px-3 py-2 rounded-md text-sm font-medium dark:hover:bg-gray-600"
        onClick={(e) => {
          e.preventDefault();
          setAnimate(!animate);
        }}
      >
        {!animate ? "Play" : "Stop"}
      </button>
      <button
        className={`dark:text-white ${
          showCape ? "bg-gray-200" : ""
        } hover:bg-gray-400 dark:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium dark:hover:bg-gray-600 border-1 ${
          showCape ? "text-gray-700" : "text-gray-200"
        }`}
        onClick={(e) => {
          e.preventDefault();
          setCape(!showCape);
        }}
      >
        Cape
      </button>
      <canvas id="skin_container" className="cursor-move "></canvas>
    </div>
  );
};

export default PlayerModel;
