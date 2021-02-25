import {createContext, useState, ReactNode, useEffect} from 'react';
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
    CompleteChallenge:()=>void;
    
}

interface ChallengesContextProps{
    children:ReactNode;
}

export const ChallengsContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}:ChallengesContextProps){
    const [level, setLevel] = useState(1);
    const[currentExperience, setExperience] = useState(0);
    const[challengesCompleted, setChallengesCompleted] = useState(0);
    const[activeChallenge, setActiveChallenge] = useState(null);
    const experienceToNextLevel = Math.pow((level +1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    function levelUp(){
        setLevel(level+1);
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
        }}
        >   
        {children}    
        
    </ChallengsContext.Provider>
    );
}
