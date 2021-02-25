import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Countdown } from "../Components/Countdown";
import { ChallengsContext } from "./ChallengesContext";

interface CountdownContextData{
    minutes:number;
    seconds:number;
    hasFinished:boolean;
    isactive:boolean;
    startCountdown:()=>void;
    resetCountdown:()=>void;

}

interface CountdownProviderProps{
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}:CountdownProviderProps){

    const {startNewChallenge}=useContext(ChallengsContext);
    const [time, setTime] = useState(0.1 * 60);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [isactive, setIsactive] = useState(false)

    const [hasFinished, sethasFinished] = useState(false)
    
        
    function startCountdown(){
        setIsactive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsactive(false);
        sethasFinished(false);
        setTime(0.1 * 60);
        
    
        }
    
        useEffect(() => {
        if (isactive && time > 0) {
        countdownTimeout = setTimeout(() => {
        setTime(time - 1);
        }, 1000)
        } else if (isactive && time == 0) {
        sethasFinished(true);
        setIsactive(false);
        startNewChallenge();
        }
        }, [isactive, time]
    
        )

        return(
            <CountdownContext.Provider value={{
                minutes,
                seconds,
                hasFinished,
                isactive,
                startCountdown,
                resetCountdown,
            }}>
                {children}
            </CountdownContext.Provider>
        )
}