import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/lhpegnolatto.png"
        alt="Luiz Henrique Pegnolatto"
      />
      <div>
        <strong>Luiz Henrique Pegnolatto</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
