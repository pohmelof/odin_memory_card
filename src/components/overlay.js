function Overlay(props) {
    return (
        <div className="overlay">
            <h2>Game Over</h2>
            <button className="reset-btn" onClick={props.handleClick}>Retry</button>
        </div>
    )
}

export default Overlay