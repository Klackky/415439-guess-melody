export const createTimer = (endtime) => {
  return {
    endtime,
    tick() {
      if (endtime === 0) {
        return `Время вышло`;
      } if (endtime < 0) {
        return false;
      } else {
        return createTimer(--endtime);
      }
    }
  };
};
