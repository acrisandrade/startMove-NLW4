import'../Styles/global.css'
import { ChallengesProvider } from '../Context/ChallengesContext';
import { CountdownProvider } from '../Context/CountdownContext';

function MyApp({ Component, pageProps }) {
  
  return (   
    <ChallengesProvider>
        <Component {...pageProps} />
    </ChallengesProvider>

  )
}

export default MyApp
