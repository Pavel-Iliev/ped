import { useEffect, useState } from 'react';
import './Activity.css';
import clock from '../../assests/clock.svg';
import arrow from '../../assests/arrow-blue.svg';
import filter from '../../assests/filter.svg';

function Activity() {

  const activitesDatas = [
    {
      'title' : 'Hatha Yoga',
      'image' : '/images/yoga.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'ravizza',
      'category' : 'tonifica',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : false
    },
    {
      'title' : 'Pancafit',
      'image' : '/images/pancafit.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'ravizza',
      'category' : 'tonifica',
      'signIn' : false,
      'full' : true,
      'close' : false,
      'free' : false
    },
    {
      'title' : 'BodyPump',
      'image' : '/images/bodyjump.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'ravizza',
      'category' : 'tonifica',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : false
    },
    {
      'title' : 'Play Acqua',
      'image' : '/images/playacqua.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'ravizza',
      'category' : 'acqua',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : false
    },
    {
      'title' : 'Hatha Yoga',
      'image' : '/images/yoga.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'setai',
      'category' : 'tonifica',
      'signIn' : false,
      'full' : false,
      'close' : true,
      'free' : false
    },
    {
      'title' : 'Pancafit',
      'image' : '/images/pancafit.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'setai',
      'category' : 'tonifica',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : true
    },
    {
      'title' : 'BodyPump',
      'image' : '/images/bodyjump.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'setai',
      'category' : 'tonifica',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : false
    },
    {
      'title' : 'Play Acqua',
      'image' : '/images/playacqua.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'setai',
      'category' : 'acqua',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : false
    },
    {
      'title' : 'Hatha Yoga',
      'image' : '/images/yoga.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'ravizza',
      'category' : 'tonifica',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : false
    },
    {
      'title' : 'Pancafit',
      'image' : '/images/pancafit.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'ravizza',
      'category' : 'tonifica',
      'signIn' : false,
      'full' : true,
      'close' : false,
      'free' : false
    },
    {
      'title' : 'BodyPump',
      'image' : '/images/bodyjump.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'ravizza',
      'category' : 'tonifica',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : false
    },
    {
      'title' : 'Play Acqua',
      'image' : '/images/playacqua.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'ravizza',
      'category' : 'acqua',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : false
    },
    {
      'title' : 'Hatha Yoga',
      'image' : '/images/yoga.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'setai',
      'category' : 'tonifica',
      'signIn' : false,
      'full' : false,
      'close' : true,
      'free' : false
    },
    {
      'title' : 'Pancafit',
      'image' : '/images/pancafit.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'setai',
      'category' : 'tonifica',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : true
    },
    {
      'title' : 'BodyPump',
      'image' : '/images/bodyjump.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'setai',
      'category' : 'tonifica',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : false
    },
    {
      'title' : 'Play Acqua',
      'image' : '/images/playacqua.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'setai',
      'category' : 'acqua',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : false
    }
  ]

  const [activites, setActivites] = useState(activitesDatas);
  const [club, setClub] = useState('');
  const [category, setCategory] = useState('');
  const [activity, setActivity] = useState('');

  useEffect(()=> {
    console.log(club, 'club');
    console.log(category, 'category');
    console.log(activity, 'activity');

  },[club, category, activity])

  function onClubChange(el) {
    setClub(el.target.value);
  }

  function onCategoryChange(el) {
    setCategory(el.target.value);
  }

  function onActivityChange(el) {
    setActivity(el.target.value);
  }

  return (
    <>
      <div className="filters">
        <span className="filters__title"><img src={filter} alt="filters" />Filtri</span>
        <div className="filters__wrap">
          <select 
            onChange={onClubChange}
            className="filter-club"
          >
            <option value="all">Tutti i Club</option>
            <option value="ravizza">Club Ravizza</option>
            <option value="setai">Club Setai</option>
          </select>
          <select 
            onChange={onCategoryChange}
            className="filter-category"
          >
            <option value="all">Tutte le categorie</option>
            <option value="acqua">Attività in acqua</option>
            <option value="tonifica">Cardiovascolari e Tonificanti</option>
          </select>
          <select 
            onChange={onActivityChange}
            className="filter-activity"
          >
            <option value="all">Tutte le attività</option>
            <option value="Play Acqua">Play Acqua</option>
            <option value="BodyPump">BodyPump</option>
            <option value="Pancafit">Pancafit</option>
            <option value="Hatha Yoga">Hatha Yoga</option>
          </select>
        </div>
      </div>

      <div className="list-activities">
        <div className="container">
          <ul>
            {
              activites.map((el, index) => {
                return <li key={index} className={`${el.category}`}>
                  <div className="list-activites__image">
                    <img src={el.image} alt={el.title}/>
                  </div>
                  <div className="list-activites__time-hour">
                    <div className="list-activites__time-hour-t">
                      <span className="title-blue">{el.startTime}</span>
                      <span>{el.endTime}</span>
                    </div>
                    <div className="list-activites__time-hour-h">
                      <img src={clock} alt="clock icon" />
                      <span>{el.min} min</span>
                    </div>
                  </div>
                  <h2 className="title-blue">
                    {el.title}
                    <img src={arrow} alt="arrow"/>
                  </h2>
                  <div className="list-activites__size-btn">
                    <div className="list-activites__size-btn-s">
                      {
                        el.free ? <p>Attività libera</p>
                        :
                        <div className="wrap-sizes">
                          <span>0 / </span>
                          <span>{el.size}</span>
                          <p>Posti disponibili</p>
                        </div>
                      }
                    </div>
                    <div className="list-activites__size-btn-btn">
                      {
                        el.free ? ''
                        :
                          el.full ? 
                            <button className="btn btn-waiting">metti in attesa</button> 
                            :
                            el.close ? 
                              <button className="btn btn-subscribe btn-not-allow">Iscriviti</button> 
                              :
                              <button 
                                className="btn btn-subscribe"
                                onClick={(element) => {
                                  if(!el.signIn) {
                                    el.signIn = true;
                                    element.target.innerText = 'Annulla';
                                    element.target.classList.remove('btn-subscribe');
                                    element.target.classList.add('btn-cancel');
                                  } else {
                                    el.signIn = false;
                                    element.target.innerText = 'Iscriviti';
                                    element.target.classList.remove('btn-cancel');
                                    element.target.classList.add('btn-subscribe');
                                  }
                                }}
                              >
                                Iscriviti
                              </button>
                      }
                    </div>
                  </div>
                  <img className="arrow-desktop" src={arrow} alt="arrow"/>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Activity;