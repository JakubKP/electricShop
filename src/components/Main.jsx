import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import bonusLeft from '../images/plus1.jpg';
import bonusRight from '../images/plus2.jpg';
import baner1 from '../images/baner.jpg';
import baner2 from '../images/baner2.jpg';
import baner3 from '../images/baner3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Offer from './Offer';
import img1 from '../images/offer1.jpg';
import img2 from '../images/offer2.jpg';
import img3 from '../images/offer3.jpg';
import img4 from '../images/offer4.jpg';
import img5 from '../images/offer5.jpg';
import img6 from '../images/offer6.jpg';
import img7 from '../images/offer7.jpg';
import img8 from '../images/offer8.jpg';
import img9 from '../images/offer9.jpg';
import img10 from '../images/offer10.jpg';
import img11 from '../images/offer11.jpg';
import Recommended from './Recommended';
import picie1 from '../images/picie1.jpg';
import picie2 from '../images/picie2.jpg';
import picie3 from '../images/picie3.jpg';
import picie4 from '../images/picie4.jpg';
import picie5 from '../images/picie5.jpg';
import picie6 from '../images/picie6.jpg';



const offers = [
  {
    id: 1,
    img: img1,
    title: 'Top lodówki 2022 nawet 900zł taniej!',
  },
  {
    id: 2,
    img: img2,
    title: 'Suszarki na pranie nawet 500 zł taniej!',
  },
  {
    id: 3,
    img: img3,
    title: 'Grille nawet 600zł taniej',
  },
  {
    id: 4,
    img: img4,
    title: 'Ogrodowa Wyprzedaż - nawet 2500zł taniej!',
  },
  {
    id: 5,
    img: img5,
    title: 'Wybierz energooszczędne AGD',
  },
  {
    id: 6,
    img: img6,
    title: 'Laptopy i komputery limitowane',
  },
  {
    id: 7,
    img: img7,
    title: 'Hulajnogi elektryczne taniej nawet o 800zł',
  },
  {
    id: 8,
    img: img8,
    title: 'Smartwatche i smartbandy',
  },
  {
    id: 9,
    img: img9,
    title: 'Strefa Apple',
  },
  {
    id: 10,
    img: img10,
    title: 'Ranking ekspresów',
  },
  {
    id: 11,
    img: img11,
    title: '-25% na 2-gi produkt lub piąty za 1zł',
  }
]

const Main = () => {

  const [activeID, setActiveID] = useState()
  const [position, setPosition] = useState(false)

  const items = [
    {id: 1, text: 'Syropy do saturatorów'},
    {id: 2, text: 'Saturatory'}
  ]

    const backgroundLeft = {
        backgroundImage: `url(${bonusLeft})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-26px 0',
        width: '272px',
        height: `${position ? '100%' : 'calc(100% - 120px)'}`,
        position: 'fixed',
        left: '0',
        top: `${position ? '0px' : '120px'}`,
        zIndex: '200'
      }
    
      const backgroundRight = {
        backgroundImage: `url(${bonusRight})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-1px 0',
        width: '272px',
        height: `${position ? '100%' : 'calc(100% - 120px)'}`,
        position: 'fixed',
        right: '0',
        top: `${position ? '0px' : '120px'}`,
        zIndex: '200'
      }
    
      const baner = {
        backgroundImage: `url(${baner1}), url(${baner2}), url(${baner3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1920px 366px',
        backgroundPosition: '0 0, 1920px 0 , 3840px 0',
        width: '5760px',
        transform: 'translateX(0%)',
      }



      const Offers = offers.map(offer => <Offer key={offer.id} img={offer.img} title={offer.title} />);

      function slideRight () {
        if(document.getElementsByClassName('offers')[0].style.left.replace(/\D/g, '') < 350){
          document.getElementsByClassName('left-arrow')[0].style.color = 'black';
          document.getElementsByClassName('offers')[0].style.left = 
          `-${Number(document.getElementsByClassName('offers')[0].style.left.replace(/\D/g, '')) + 158}px`;
          console.log(Number(document.getElementsByClassName('offers')[0].style.left.replace(/\D/g, '')))
          if(Number(document.getElementsByClassName('offers')[0].style.left.replace(/\D/g, '')) > 350) {
            document.getElementsByClassName('right-arrow')[0].style.color = 'grey';
          }
        }
      }
      
      function slideLeft () {
        if(document.getElementsByClassName('offers')[0].style.left.replace(/\D/g, '') > 150){
          document.getElementsByClassName('right-arrow')[0].style.color = 'black';
          document.getElementsByClassName('offers')[0].style.left = 
          `-${Number(document.getElementsByClassName('offers')[0].style.left.replace(/\D/g, '')) - 158}px`;
          console.log(Number(document.getElementsByClassName('offers')[0].style.left.replace(/\D/g, '')))
          if(Number(document.getElementsByClassName('offers')[0].style.left.replace(/\D/g, '')) < 150) {
            document.getElementsByClassName('left-arrow')[0].style.color = 'grey';
          }
        }
      }

    useEffect(
      () => {
        document.getElementsByClassName('right-arrow')[0].addEventListener('click', slideRight);
        document.getElementsByClassName('left-arrow')[0].addEventListener('click', slideLeft);
      },[])

      const recommended = items.map(item => (
        <li key={item.id} className={activeID === item.id ? 'recommended-select recommended-active' : 'recommended-select'} onClick={() => {
          setActiveID(item.id);
          if(activeID !== item.id) {
            document.getElementsByClassName('recommended-select')[0].classList.remove('recommended-active');
          }
        }}>
          {item.text}
        </li>
      ))

      function slideRightRecommended () {
        if(document.getElementsByClassName('recommended-products-list')[0].style.left.replace(/\D/g, '') < 
        (((document.getElementsByClassName('recommended-products-list')[0].clientWidth/180) - 7) * 180) - 20){
          document.getElementsByClassName('left-arrow-recommended')[0].style.color = 'black';
          document.getElementsByClassName('recommended-products-list')[0].style.left = 
          `-${Number(document.getElementsByClassName('recommended-products-list')[0].style.left.replace(/\D/g, '')) + 180}px`;
          console.log(Number(document.getElementsByClassName('recommended-products-list')[0].style.left.replace(/\D/g, '')))
          if(Number(document.getElementsByClassName('recommended-products-list')[0].style.left.replace(/\D/g, '')) > (((document.getElementsByClassName('recommended-products-list')[0].clientWidth/180) - 7) * 180) - 20) {
            document.getElementsByClassName('right-arrow-recommended')[0].style.color = 'grey';
          }
        }
      }

      function slideLeftRecommended () {
        if(document.getElementsByClassName('recommended-products-list')[0].style.left.replace(/\D/g, '') > 100){
          document.getElementsByClassName('right-arrow-recommended')[0].style.color = 'black';
          document.getElementsByClassName('recommended-products-list')[0].style.left = 
          `-${Number(document.getElementsByClassName('recommended-products-list')[0].style.left.replace(/\D/g, '')) - 180}px`;
          console.log(Number(document.getElementsByClassName('recommended-products-list')[0].style.left.replace(/\D/g, '')))
          if(Number(document.getElementsByClassName('recommended-products-list')[0].style.left.replace(/\D/g, '')) < 100) {
            document.getElementsByClassName('left-arrow-recommended')[0].style.color = 'grey';
          }
        }
      }

      useEffect(
        () => {
          const updatePosition = () => {
            if(window.pageYOffset > 0) {
              setPosition(true)
            } else {
              setPosition(false)
            }
          }

          window.addEventListener('scroll', updatePosition)
          return () => window.removeEventListener('scroll', updatePosition)
        }, [])

      useEffect(
        () => {
          document.getElementsByClassName('recommended-select')[0].classList.add('recommended-active');
          document.getElementsByClassName('right-arrow-recommended')[0].addEventListener('click', slideRightRecommended);
          document.getElementsByClassName('left-arrow-recommended')[0].addEventListener('click', slideLeftRecommended);
        }, [])

        const recommendedProductsList = [
          {id: 1, name: 'xdasdasdasdasdasdasd sadasdd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie1},
          {id: 2, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie2},
          {id: 3, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie3},
          {id: 4, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie4},
          {id: 5, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie5},
          {id: 6, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie6},
          {id: 7, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie2},
          {id: 8, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie2},
          {id: 9, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie2},
          {id: 10, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie2},
          {id: 11, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie2}
        ]

        const recommendedProductsList2 = [
          {id: 1, name: 'xdasdasdasdasdasdasd sadasdd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie1},
          {id: 2, name: 'asdasda', zl: '22', gr: '99', originalPrice: '29,99', rates: '21', img: picie2},
          {id: 3, name: 'asdasasd', zl: '21', gr: '99', originalPrice: '29,99', rates: '21', img: picie3},
          {id: 4, name: 'dasdasdasda', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie4},
          {id: 5, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie5},
          {id: 6, name: 'xd', zl: '26', gr: '99', originalPrice: '29,99', rates: '21', img: picie6},
          {id: 7, name: 'xd', zl: '27', gr: '99', originalPrice: '29,99', rates: '21', img: picie2},
          {id: 8, name: 'xd', zl: '28', gr: '99', originalPrice: '29,99', rates: '21', img: picie2},
          {id: 9, name: 'xd', zl: '29', gr: '99', originalPrice: '29,99', rates: '21', img: picie2},
          {id: 10, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie2},
          {id: 11, name: 'xd', zl: '24', gr: '99', originalPrice: '29,99', rates: '21', img: picie2}
        ]

        const recommendedProducts = recommendedProductsList.map(item => (
          <Recommended key={item.id} name={item.name} zl={item.zl} gr={item.gr} originalPrice={item.originalPrice} rates={item.rates} img={item.img} />
        ))
        const recommendedProducts2 = recommendedProductsList2.map(item => (
          <Recommended key={item.id} name={item.name} zl={item.zl} gr={item.gr} originalPrice={item.originalPrice} rates={item.rates} img={item.img} />
        ))
    return (
        <>
        <div className='main'>
        <div className='aside-baner-left' style={backgroundLeft}></div>
        <div className='aside-baner-right' style={backgroundRight}></div>
        <div className='baner' style={baner}>
          <NavLink className='huawei' to='Huawei'></NavLink>
          <NavLink className='apple' to='Apple'></NavLink>
          <NavLink className='gamepass' to='Gamepass'></NavLink>
        </div>
        <div className='baner-select'>
          <div id='huawei'>Huawei</div>
          <div id='apple'>Apple</div> 
          <div id='gamepass'>Game Pass</div>
        </div>
        <div className='before-recommendation'>
            <div className='left-arrow'>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className='right-arrow'>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className='offers-container'>
              <div className='offers'>
              {Offers}
              </div>
            </div>
        </div>
        <div className='recommended-for-you'>
          <div className='recommended-header-container'>
            <div className='recommended-text-container'>
              Rekomendowane dla Ciebie
            </div>
            <ul className='recommended-select-container'>
              {recommended}
            </ul>
          </div>
          <div className='recommended-container'>
          <div className='left-arrow-recommended'>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className='right-arrow-recommended'>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className='recommended-products'>
              <div className='recommended-products-list'>
                  {activeID === 1 ? recommendedProducts : recommendedProducts2}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default Main;