import Head from 'next/head';
import { CompletedChallenges } from '../Components/CompletedChallenges';
import { ExperienceBar } from "../Components/experienceBar";
import{ Profile } from "../Components/Profile";
import{ Countdown } from "../Components/Countdown";
import styles from '../Styles/Pages/Home.module.css';
import { ChallengeBox } from '../Components/ChallengeBox';
import { CountdownProvider } from '../Context/CountdownContext';

export default function Home() {
  return (
    <div className= {styles.container}>
      <Head>
        <title>Início | Start Move </title>
      </Head>
      <ExperienceBar />
      
      <CountdownProvider>
      <section>
        <div>
        <Profile />
        <CompletedChallenges/>
        <Countdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
      </CountdownProvider>
    </div>
      
     
  
  );
}
