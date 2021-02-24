import { AppProps } from 'next/app';

import { ChallengesContextProvider } from '../contexts/ChallengesContext';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChallengesContextProvider>
      <Component {...pageProps} />
    </ChallengesContextProvider>
  );
};

export default MyApp;
