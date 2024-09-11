import { useState, useCallback } from 'react';
import { KIRBY_INITIAL_WIDTH, KIRBY_INITIAL_HEIGHT, KIRBY_CROUCHED_WIDTH, KIRBY_CROUCHED_HEIGHT } from './gameConfig';

export const useKirbyMovement = () => {
  const [kirbyY, setKirbyY] = useState<number>(0);
  const [kirbyWidth, setKirbyWidth] = useState<number>(KIRBY_INITIAL_WIDTH);
  const [kirbyHeight, setKirbyHeight] = useState<number>(KIRBY_INITIAL_HEIGHT);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isCrouching, setIsCrouching] = useState<boolean>(false);

  const jump = useCallback(() => {
    if (!isJumping) {
      setIsJumping(true);
      let jumpDuration = 0;
      const jumpInterval = setInterval(() => {
        if (jumpDuration < 100) {
          setKirbyY((prev) => prev + 10);
          jumpDuration += 10;
        } else if (jumpDuration < 245) {
          setKirbyY((prev) => prev + 7);
          jumpDuration += 7;
        } else if (jumpDuration < 250) {
          setKirbyY((prev) => prev + 2);
          jumpDuration += 2;
        } else if (jumpDuration < 255) {
          setKirbyY((prev) => prev - 2);
          jumpDuration += 2;
        } else if (jumpDuration < 500) {
          setKirbyY((prev) => prev - 7);
          jumpDuration += 7;
        } else {
          clearInterval(jumpInterval);
          setIsJumping(false);
          setKirbyY(0);
        }
      }, 20);
    }
  }, [isJumping]);

  const crouch = useCallback(() => {
    if (!isCrouching) {
      setIsCrouching(true);
      setKirbyWidth(KIRBY_CROUCHED_WIDTH);
      setKirbyHeight(KIRBY_CROUCHED_HEIGHT);
    }
  }, [isCrouching]);

  const stand = useCallback(() => {
    if (isCrouching) {
      setIsCrouching(false);
      setKirbyWidth(KIRBY_INITIAL_WIDTH);
      setKirbyHeight(KIRBY_INITIAL_HEIGHT);
    }
  }, [isCrouching]);


  return { kirbyY, kirbyWidth, kirbyHeight, isJumping, isCrouching, jump, crouch, stand, setKirbyY,setIsJumping,setIsCrouching,setKirbyWidth,setKirbyHeight };
};