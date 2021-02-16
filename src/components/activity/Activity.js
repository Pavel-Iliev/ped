import './Activity.css';
import DatePicker from "react-horizontal-datepicker";

function Activity(props) {
  const {selectedDay} = props;
  return (
    <>
      <div className="header-calendar">
        <DatePicker 
          getSelectedDay={selectedDay}
          color={"#D3DF5D"}  
        />
      </div>
    </>
  )
}

export default Activity;