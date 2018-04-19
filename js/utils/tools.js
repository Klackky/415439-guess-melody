export const roundTime = (time) => {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  const roundedTime = {
    minutes,
    seconds: seconds > 9 ? seconds : `0` + seconds,
  };
  return roundedTime;
};
