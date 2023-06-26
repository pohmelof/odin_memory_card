import "../styles/card.css"

function Card(props) {
    const {imgSrc, imgAlt, imgHeading, imgId} = props.imgData;
    const handleClick = props.handleClick;
    
    return (
        <div className='card' onClick={(e) => handleClick(e, imgId)}>
            <img
                src={imgSrc}
                alt={imgAlt}
                className='card_img'
            />
            <h3 className='card_heading'>
                {imgHeading}
            </h3>
        </div>
    )
}

export default Card;