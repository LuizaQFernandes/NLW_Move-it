import styles from '../styles/components/Profile.module.css';
import {useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';


export function Profile(){
    const { level } = useContext(ChallengesContext);
    
    return(
            <div className={styles.profileContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" fill="rgba(0,189,255,1)"/></svg>
            <div>
                <strong>Luiza Fernandes</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />Level {level}</p>
            </div>
        </div>
    );
}