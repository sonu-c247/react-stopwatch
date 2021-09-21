import styles from "./watch.module.css";

const paddedTime = (num) => {
  return num.toString().padStart(2, 0);
};

const formatTime = (timeInSeconds) => {
  const seconds = timeInSeconds % 60;
  const minutes = Math.floor(timeInSeconds / 60);
  const hours = Math.floor(timeInSeconds / (60 * 60));

  return `${paddedTime(hours)}:${paddedTime(minutes)}:${paddedTime(seconds)}`;
};

const Watch = ({ currentTime }) => {
  return <div className={styles.container}>{formatTime(currentTime)}</div>;
};

export default Watch;
