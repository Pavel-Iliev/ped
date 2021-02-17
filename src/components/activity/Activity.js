import { useEffect, useState } from 'react';
import './Activity.css';
import clock from '../../assests/clock.svg';
import arrow from '../../assests/arrow-blue.svg';
import filter from '../../assests/filter.svg';
import Footer from '../footer/Footer';

import clubIcon from '../../assests/club.svg';
import categoryIcon from '../../assests/category.svg';
import activityIcon from '../../assests/activity.svg';

function Activity() {

  const activitiesDatas = [
    {
      'title' : 'Hatha Yoga',
      'image' : '/images/yoga.jpg',
      'min' : '30',
      'startTime' : '08:30',
      'endTime' : '09:15',
      'size' : '30',
      'club' : 'ravizza',
      'category' : 'tonifica',
      'activity' : 'hathaYoga',
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
      'activity' : 'pancaFit',
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
      'activity' : 'bodyPump',
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
      'activity' : 'playAcqua',
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
      'activity' : 'hathaYoga',
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
      'activity' : 'pancaFit',
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
      'activity' : 'bodyPump',
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
      'activity' : 'playAcqua',
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
      'activity' : 'hathaYoga',
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
      'activity' : 'pancaFit',
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
      'activity' : 'bodyPump',
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
      'activity' : 'playAcqua',
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
      'activity' : 'hathaYoga',
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
      'activity' : 'pancaFit',
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
      'activity' : 'bodyPump',
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
      'activity' : 'playAcqua',
      'signIn' : false,
      'full' : false,
      'close' : false,
      'free' : false
    }
  ]

  const selectors = [
    {
      id: 'club',
      options: [
        {
          label: 'Tutti i Club',
          value: 'all',
        },
        {
          label: 'Club Ravizza',
          value: 'ravizza',
        },
        {
          label: 'Club Setai',
          value: 'setai',
        },
      ],
    },
    {
      id: 'category',
      options: [
        {
          label: 'Tutte le Categorie',
          value: 'all',
        },
        {
          label: 'Attività in acqua',
          value: 'acqua',
        },
        {
          label: 'Cardiovascolari e Tonificanti',
          value: 'tonifica',
        },
      ],
    },
    {
      id: 'activity',
      options: [
        {
          label: 'Tutte le Attività',
          value: 'all',
        },
        {
          label: 'Play Acqua',
          value: 'playAcqua',
        },
        {
          label: 'BodyPump',
          value: 'bodyPump',
        },
        {
          label: 'Pancafit',
          value: 'pancaFit',
        },
        {
          label: 'Hatha Yoga',
          value: 'hathaYoga',
        }
      ],
    }
  ]

  const [activities, setActivities] = useState(activitiesDatas);

  const [menuOpen, setMenuOpen] = useState(false)

  const [club, setClub] = useState('all');
  const [category, setCategory] = useState('all');
  const [activity, setActivity] = useState('all');

  function openMenu () {
    document.querySelector('.filters').classList.add('open-filters')
    setMenuOpen(true);
  }

  function closeMenu () {
    document.querySelector('.filters').classList.remove('open-filters')
    setMenuOpen(false);
  }

  useEffect(() => {
    const activitiesList = activitiesDatas.filter(el => {
      if (club === 'all') {
        return true;
      } 
      return el.club.includes(club);
    }).filter(el => {
      if (category === 'all') {
        return true;
      }
      return el.category.includes(category);
    }).filter(el => {
        if (activity === 'all') {
          return true;
        }
        return el.activity.includes(activity);
      })

    setActivities(activitiesList);

  }, [club, category, activity])  

  const onSelectChange = ({ target }, id) => {
    const { value } = target;
    if (id === 'club') {
      setClub(value);
    }
    if (id === 'category') {
      setCategory(value);
    }
    if (id === 'activity') {
      setActivity(value);
    }
  };

  return (
    <>
      <div className="filters">
        <span className="filters__title" onClick={menuOpen ? closeMenu : openMenu}><img src={filter} alt="filters" />Filtri</span>
        <div className="filters__wrap">
          <div className="container">
            <div className="filters__wrap--container">
              <img className="icon-club" src={clubIcon} alt="clubs" />
              <img className="icon-category" src={categoryIcon} alt="category" />
              <img className="icon-activity" src={activityIcon} alt="activity" />
              {
                selectors.map(selector => {
                  return <select
                            onChange={(event) => onSelectChange(event, selector.id)}
                            className={`filter-${selector.id}`}
                          >
                          {
                            selector.options.map(option => {
                              return <option value={option.value}>{option.label}</option>
                            })
                          }
                        </select>
                })
              }
            </div>
          </div>
        </div>
      </div>

      <div className="list-activities">
        <div className="container">
          <ul>
            {
              activities.map((el, index) => {
                return <li key={index} className={`${el.category}`}>
                  <div className="list-activities__image">
                    <img src={el.image} alt={el.title}/>
                  </div>
                  <div className="list-activities__time-hour">
                    <div className="list-activities__time-hour-t">
                      <span className="title-blue">{el.startTime}</span>
                      <span>{el.endTime}</span>
                    </div>
                    <div className="list-activities__time-hour-h">
                      <img src={clock} alt="clock icon" />
                      <span>{el.min} min</span>
                    </div>
                  </div>
                  <h2 className="title-blue">
                    {el.title}
                    <img src={arrow} alt="arrow"/>
                  </h2>
                  <div className="list-activities__size-btn">
                    <div className="list-activities__size-btn-s">
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
                    <div className="list-activities__size-btn-btn">
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

      <Footer />
    </>
  )
}

export default Activity;