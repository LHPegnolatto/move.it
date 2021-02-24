import { useContext } from 'react';

import styles from '../styles/components/CompletedChallenges.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';

interface CompletedChallengesProps {}

const CompletedChallenges = ({}: CompletedChallengesProps) => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};

export default CompletedChallenges;
