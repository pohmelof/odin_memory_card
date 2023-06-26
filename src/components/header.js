import { useEffect } from 'react';
import '../styles/header.css'

function Header(props) {
    const {score, bestScore, setBestScore} = props;
    useEffect(()=>{
        if (score > bestScore) {
            setBestScore(score);
        }
    })
    return (
        <header>
            <div className="heading">
                <h1>Memory Card Game</h1>
                <p>Click on each card only once</p>
            </div>
            <div className="scoreContainer">
                <h3>Score: {score}</h3>
                <h3>Best: {bestScore}</h3>
            </div>
        </header>
    )
}

export default Header;