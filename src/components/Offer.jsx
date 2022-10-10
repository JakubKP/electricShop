const Offer = ({ id, img, title }) => {
    return (
        <div className="offer">
              <div className='offer-image'>
                <img src={img} alt={title}></img>
              </div>
              <div className='offer-text'>
              {title}
              </div>
        </div>
    );
}

export default Offer;