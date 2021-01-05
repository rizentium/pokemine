import Bounce from "bounce.js";
import { Dispatch, SetStateAction } from "react";

interface CatchActionOnClickProps {
  clickEvent: any,
  currentExp: {
    value: number,
    setCurrentExp: Dispatch<SetStateAction<number>>
  },
  setModelVisible: Dispatch<SetStateAction<boolean>>
}

export const CatchActionOnClick = (props: CatchActionOnClickProps) => {
  const bounce = new Bounce();

  const displayHeight = window.innerHeight;
  const displayWidth = window.innerWidth;
  
  const selectedPoint = {
    x: props.clickEvent.clientX - (displayWidth/2),
    // 40 is a fixed number for normalize y point
    y: (props.clickEvent.clientY + 40) - displayHeight
  };

  const goToSelectedPixle = bounce
    .translate({
      from: { x: 0, y: 0 },
      to: { x: selectedPoint.x, y: selectedPoint.y},
      duration: 600,
      stiffness: 4
    })
    .scale({
      from: { x: 1, y: 1 },
      to: { x: 0.1, y: 2.3 },
      easing: "sway",
      duration: 800,
      delay: 65,
      stiffness: 2
    })
    .scale({
      from: { x: 1, y: 1},
      to: { x: 5, y: 1 },
      easing: "sway",
      duration: 300,
      delay: 30,
    })
    .translate({
      from: { x: 0, y: 0},
      to: { x: selectedPoint.x * -1, y: selectedPoint.y * -1 },
      duration: 10000,
      stiffness: 1
    });
    
  goToSelectedPixle.applyTo(document.getElementById('pokeball') as Element);

  if (props.clickEvent.target.id === 'pokemon') {
    if (props.currentExp.value > 0) {
      props.currentExp.setCurrentExp((old: number) => {
        return old - 100;
      });
    }

    if (props.currentExp.value < 100) {
      props.setModelVisible(true);
    }
  } else {
    console.log('Missed!');
  }

  setTimeout(() => {
    goToSelectedPixle.remove();
  }, 1000);
}