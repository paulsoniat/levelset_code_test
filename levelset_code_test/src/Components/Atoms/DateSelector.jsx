import {useState} from 'react';
import DatePicker from 'react-datepicker';
import {formatDate} from '../../Helpers/Functions/formatDate';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = ({setSelectedOption, selectedOption, inputTitle}) => {
    /*
        This is a simple date selection component that will take in a title
        and function to edit information about the input field and component passed in that the date is selected as an input

        This will also handle the logic of presentation for itself, thanks to react-datepicker
    */
   const [startDate, setStartDate] = useState (new Date ());
    return (
        <div className="col-12">
        {inputTitle}
        <DatePicker
          selected={startDate}
          onChange={date => {
            setStartDate (date);
            const formattedDate = formatDate (date.toString ());
            setSelectedOption ({...selectedOption, birthday: formattedDate});
          }}
        />
      </div>
    );
  };
  
  export default DateSelector;
  