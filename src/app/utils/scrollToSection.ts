import {RefObject} from 'react';

export const scrollToSection = (ref: RefObject<HTMLElement>) => {
  if (ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }
};
