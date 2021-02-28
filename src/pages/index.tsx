import Head from 'next/head';
import{GetServerSideProps} from 'next';
import { CompletedChallenges } from '../Components/CompletedChallenges';
import { ExperienceBar } from "../Components/experienceBar";
import{ Profile } from "../Components/Profile";
import{ Countdown } from "../Components/Countdown";
import styles from '../Styles/Pages/Home.module.css';
import { ChallengeBox } from '../Components/ChallengeBox';
import { CountdownProvider } from '../Context/CountdownContext';
import{ChallengesProvider} from '../Context/ChallengesContext';
import { Inicial } from '../Components/Home';



interface HomeProps{
  level:number
  currentExperience:number
  challengeCompleted:number
}

export default function Home(props:HomeProps) {
  
  return (
    
    <ChallengesProvider level={props.level}
    currentExperience={props.currentExperience}
    challengeCompleted={props.challengeCompleted}
    >
      
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
    </ChallengesProvider>
  
    
  )
}

export const getServerSideProps :GetServerSideProps = async (ctx) => {
    const {level, currentExperience,challengeCompleted} = ctx.req.cookies;
  

  

  return{
    props: {
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengeCompleted:Number(challengeCompleted)
    }
  }
}