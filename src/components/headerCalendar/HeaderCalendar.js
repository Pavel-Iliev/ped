import './HeaderCalendar.css';
import DatePicker from "react-horizontal-datepicker";

function HeaderCalendar(props) {
  const {selectedDay} = props;
  return (
    <>
      <div className="header-calendar">
        <div className="container">
          <DatePicker 
            getSelectedDay={selectedDay}
          />
        </div>
      </div>
    </>
  )
}

export default HeaderCalendar;