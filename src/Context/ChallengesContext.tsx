import {createContext, useState, ReactNode, useEffect} from 'react';
import Challenges from '../../Challenges.json'
import Cookies from 'js-cookie';
import { LevelUpModal } from '../Components/LevelUpModal';


interface desafio{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number;
    currentExperience:number;
    challengesCompleted:number;
    experienceToNextLevel:number
    levelUp:()=>void;
    startNewChallenge:()=>void;
    resetChallenge:()=>void;
    activeChallenge:desafio;
    CompleteChallenge:()=>void;
    closeLevelUp:()=>void;
    
}

interface ChallengesContextProps{
    children:ReactNode;
    level:number
    currentExperience:number
    challengeCompleted:number
  }
  

export const ChallengsContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
    children,
    ...rest
   
}:ChallengesContextProps){
    const [level, setLevel] = useState(rest.level ?? 1);
    const[currentExperience, setExperience] = useState(rest.currentExperience ?? 0);
    const[challengesCompleted, setChallengesCompleted] = useState(rest.challengeCompleted ?? 0);
    const[activeChallenge, setActiveChallenge] = useState(null);
    const[isLevelUpModalOpen,SetIsLevelModalOpen] = useState(false);
    const experienceToNextLevel = Math.pow((level +1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission();
    }, [])


    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));

    },[level,currentExperience,challengesCompleted]);

    function levelUp(){
        setLevel(level+1);
        SetIsLevelModalOpen(true);
    }

    function closeLevelUp(){
        SetIsLevelModalOpen(false);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * Challenges.length)
        const challenge = Challenges[randomChallengeIndex]; 
        
        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Você tem um novo Desafio!🎊',{
                body: `Valendo ${challenge.amount}XP, venha conferir!`
            })
        }
    }

    function resetChallenge(){
     setActiveChallenge(null);
    }

    function CompleteChallenge(){
        if(!activeChallenge){
            return;
        }
        const {amount} = activeChallenge;
        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }
                
        setExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);

    }

    return(
        <ChallengsContext.Provider value={{level ,
        currentExperience,
        challengesCompleted, 
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        experienceToNextLevel,  
        CompleteChallenge,   
        closeLevelUp,   
        }}
        >   
        {children}    

        {isLevelUpModalOpen && <LevelUpModal/>}
        
    </ChallengsContext.Provider>
    );
}
