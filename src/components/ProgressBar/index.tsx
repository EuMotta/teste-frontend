import styles from './ProgressBar.module.css';
type Props = {
  statName?: string;
  baseStat: number;
};

const StatProgressBar: React.FC<Props> = ({ statName, baseStat }) => {
  const progressWidth = `${baseStat}%`;

  return (
    <div className={styles.progressbar_content}>
      <p>{statName}</p>
      <div className={styles.progressbar_progress}>
        <div
          className={styles.progressbar_bar}
          style={{ width: progressWidth }}
        />
        <h5>{baseStat}</h5>
      </div>
    </div>
  );
};
const StatProgressBarCompare: React.FC<Props> = ({ baseStat }) => {
  const progressWidth = `${baseStat}%`;

  return (
    <div className={styles.progressbar_progresscompare}>
      <div
        className={styles.progressbar_bar}
        style={{ width: progressWidth }}
      />
      <p>{baseStat}</p>
    </div>
  );
};

export { StatProgressBar, StatProgressBarCompare };
