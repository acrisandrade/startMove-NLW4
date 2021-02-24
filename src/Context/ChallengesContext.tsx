import {createContext, useState, ReactNode} from 'react';
import Challenges from '../../Challenges.json'


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
    
}

interface ChallengesContextProps{
    children:ReactNode;
}

export const ChallengsContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}:ChallengesContextProps){
    const [level, setLevel] = useState(1);
    const[currentExperience, setExperience] = useState(30);
    const[challengesCompleted, setChallengesCompleted] = useState(0);
    const[activeChallenge, setActiveChallenge] = useState(null);
    const experienceToNextLevel = Math.pow((level +1)* 4, 2)

    function levelUp(){
        setLevel(level+1);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * Challenges.length)
        const challenge = Challenges[randomChallengeIndex]; 
        
        setActiveChallenge(challenge)
    }

    function resetChallenge(){
     setActiveChallenge(null);
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
        }}
        >   
        {children}    
        
    </ChallengsContext.Provider>
    );
}
