import {
  FXAASkinViewer,
  createOrbitControls,
  WalkingAnimation,
} from "skinview3d";
import { useEffect, useState } from "react";
const PlayerModel = () => {
  const [animate, setAnimate] = useState(true);
  const [showCape, setCape] = useState(true);
  useEffect(() => {
    let skinViewer = new FXAASkinViewer({
      canvas: document.getElementById("skin_container"),
      width: 200,
      height: 400,
      skin: "/NotClay.png",
    });

    skinViewer.loadCape(null);
    let control = createOrbitControls(skinViewer);
    control.enableRotate = true;
    control.enableZoom = false;
    control.enablePan = true;
    let walk = skinViewer.animations.add(WalkingAnimation);

    walk.paused = !animate;
    walk.speed = 0.5;
  }, [animate]);

  return (
    <div className="mt-2 p-2 rounded bg-gray-700 flex flex-col items-start checkers dark:checkers-dark">
      <div className="flex items-start">
        <button
          className="text-gray-700 dark:text-white dark:bg-gray-500 mx-1 bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium dark:hover:bg-gray-600"
          onClick={(e) => {
            e.preventDefault();
            setAnimate(!animate);
          }}
        >
          {!animate ? "Play" : "Stop"}
        </button>
        <button
          className={`text-gray-700 dark:text-white dark:bg-gray-500 mx-1 bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium dark:hover:bg-gray-600"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setCape(!showCape);
          }}
        >
          Cape
        </button>
      </div>

      <div className="flex items-center justify-center w-full">
        <canvas id="skin_container" className="cursor-move"></canvas>
      </div>
    </div>
  );
};

export default PlayerModel;
