import React, { useEffect, useState } from 'react';
import { NavLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import euroGroup from '../images/euroGroup.png';
import shopLogo from '../images/mediaexpert.png';
import plus from '../images/PLUS.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faMagnifyingGlass, faAngleDown, faGift, faTruckFast, faClock, faCalendarCheck, faPerson, faTv, faFireBurner, faKitchenSet, faLaptop, faMobileScreenButton, faCamera, faGamepad, faBicycle, faPersonRunning, faHouse, faBriefcase, faArrowDown, faShuttleSpace, faMugHot, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Main from './Main.jsx'

function App() {

  useEffect(
    () => {
      let banerID = setInterval(() => {
        let currenValue = document.getElementsByClassName('baner')[0].style.transform;
        let replaced = Number(currenValue.replace(/\D/g, '').substr(0,2));
        if(replaced >= 66) {
          replaced = 0;
          document.getElementsByClassName('baner')[0].style.transform = `translateX(-0%)`;
        } else {
          replaced += 33;
          document.getElementsByClassName('baner')[0].style.transform = `translateX(-${replaced}.${replaced}%)`;
        }
      }, 3000)

      document.getElementById('huawei').addEventListener('mouseenter', () => {
        document.getElementsByClassName('baner')[0].style.transform = `translateX(-0%)`;
        clearInterval(banerID)
      })

      document.getElementById('apple').addEventListener('mouseenter', () => {
        document.getElementsByClassName('baner')[0].style.transform = `translateX(-33.33%)`;
        clearInterval(banerID)
      })

      document.getElementById('gamepass').addEventListener('mouseenter', () => {
        document.getElementsByClassName('baner')[0].style.transform = `translateX(-66.66%)`;
        clearInterval(banerID)
      })

      document.getElementsByClassName('baner-select')[0].childNodes.forEach(child => {
        child.addEventListener('mouseout', () => {
            banerID = setInterval(() => {
              let currenValue = document.getElementsByClassName('baner')[0].style.transform;
              let replaced = Number(currenValue.replace(/\D/g, '').substr(0,2));
              if(replaced >= 66) {
                replaced = 0;
                document.getElementsByClassName('baner')[0].style.transform = `translateX(-0%)`;
              } else {
                replaced += 33;
                document.getElementsByClassName('baner')[0].style.transform = `translateX(-${replaced}.${replaced}%)`;
              }
            }, 3000)
          }
      )})

      return () => {
        clearInterval(banerID)
      }
    }, [])

  return (
    <Router>
      <header className='header'>
        <div className='info'>
          <div className='info-container'>
          <NavLink className='button' to='status'>Status zamówienia</NavLink>
          <NavLink className='button' to='sklepy'>Znajdź sklep</NavLink>
          <NavLink className='button' to='kontakt'>Kontakt</NavLink>
          <div className='button'>Infolinia <span className='number'>756 756 756</span>
          </div>
          <div className='euroLogo'>
            <img src={euroGroup} alt='euroLogo'></img>
          </div>
          </div>
        </div>
        <div className='search'>
          <div className='search-container'>
            <div className='mediaexpert-logo'>
              <img src={shopLogo} alt='shop-logo'></img>
            </div>
            <form className='search-form'>
              <input placeholder='Wyszukaj w sklepie' type='text'></input>
              <button className='search-button'>
                <FontAwesomeIcon className='fa-2x' icon={faMagnifyingGlass} /></button>
            </form>
            <div className='login-button'>
              <div className='image-container'>
                <img src={plus} alt='promotion'></img>
              </div>
              <div className='login'>
                Zaloguj/Zarejestruj
              </div>
              <div className='angle-down-icon'>
              <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div className='clipboard'>
              <div className='icon'>
              <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className='text'>Schowek</div>
            </div>
            <div className='shopping-cart'>
              <div className='icon'>
              <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <div id='item-count'></div>
              <div className='text'>Koszyk</div>
            </div>
          </div>
        </div>
        <div className='products-info'>
          <div className='products-container'>
            <div className='products'>
              <div className='text'>Produkty</div>
              <div className='arrow-down-icon'>
              <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <div className='drop-down-menu'>
                <ul>
                  <NavLink to=''>
                    <div className='icon'>
                    <FontAwesomeIcon icon={faTv} />
                    </div>
                    <div className='name'>TV, Audio i RTV</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faFireBurner} />
                  </div>
                    <div className='name'>AGD</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faKitchenSet} />
                  </div>
                    <div className='name'>AGD do zabudowy</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faMugHot} />
                    </div>
                    <div className='name'>AGD małe</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faLaptop} />
                    </div>
                    <div className='name'>Komputery i tablety</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faMobileScreenButton} />
                    </div>
                    <div className='name'>Smartfony i zegarki</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faCamera} />
                    </div>
                    <div className='name'>Foto i kamery</div>
                    <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faGamepad} />
                    </div>
                    <div className='name'>Gaming</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faBicycle} />
                    </div>
                    <div className='name'>Rowery i hulajnogi</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faPersonRunning} />
                    </div>
                    <div className='name'>Fitness i sport</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faHouse} />
                    </div>
                    <div className='name'>Dom i ogród</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faShuttleSpace} />
                    </div>
                    <div className='name'>Zabawki i LEGO</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <div className='name'>Do szkoły</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                  <NavLink to=''>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                    <div className='name'>Outlet</div>
                      <div className='icon-angle-right'>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                  </NavLink>
                </ul>
              </div>
              </div>
            <div className='promotions'>
              <div className='promotion-icon'>
              <FontAwesomeIcon icon={faGift} />
              </div>
              <div className='text'>
                Promocje
              </div>
            </div>
            <div className='free-ship'>
              <div className='free-ship-icon'>
              <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <div className='text'>
                Darmowy transport
              </div>
            </div>
            <div className='fast-get'>
              <div className='fast-get-icon'>
              <FontAwesomeIcon icon={faClock} />
              </div>
              <div className='text'>
                Odbiór za godzinę
              </div>
            </div>
            <div className='ship-tommorow'>
              <div className='calendar-icon'>
              <FontAwesomeIcon icon={faCalendarCheck} />
              </div>
              <div className='text'>
                Dostawa już jutro
              </div>
            </div>
            <div className='free-personal-pickup'>
              <div className='person-icon'>
              <FontAwesomeIcon icon={faPerson} />
              </div>
              <div className='text'>
                Darmowy odbiór osobisty
              </div>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
