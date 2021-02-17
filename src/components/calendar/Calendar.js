import './Calendar.css';
import HeaderCalendar from '../headerCalendar/HeaderCalendar'
import Activity from '../activity/Activity';

const selectedDay = (val) =>{
  console.log(val)
};

function Calendar() {
  return (
    <>
      <HeaderCalendar 
        selectedDay={selectedDay}
      />
      <Activity />
    </>
  )
}

export default Calendar;