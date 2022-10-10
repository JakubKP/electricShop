import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Recommended = ({ name, zl, gr, originalPrice, img, rates }) => {
    return (
        <>
            <div className='recommended-item'>
                <div className='recommended-item-image'>
                    <img src={img} alt='item'></img>
                </div>
                <div className='recommended-item-text'>
                    {name}
                </div>
                <div className='recommended-item-rate'>
                    <div className='item-rate'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className='item-rates'>
                        ({rates})
                    </div>
                </div>
                <div className='recommended-item-price-container'>
                    <div className='recommended-item-price '>
                        <div className='recommended-zl'>
                            {zl}
                        </div>
                        <div className='recommended-gr'>
                            <div>{gr}</div>
                            <div>zł</div>
                        </div>
                    </div>
                    <div className='recommended-item-oldprice'>
                        {originalPrice}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recommended;