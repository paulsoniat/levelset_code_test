import {useState} from 'react';

const Dropdown = ({options, setSelectedOption, currentSelection}) => {
  /*
    This component takes in options and renders them as a menu
    It will set the selection to the parent that passes in the props function as well as on the menu of the component as well
  */
  const [dropdownOption, setDropdownOption] = useState (options[0].value);
  const updateSelection = e => {
    e.preventDefault ();
    setSelectedOption ({...currentSelection, ownerName: e.target.value});
    setDropdownOption (e.target.value);
  };
  return (
    <select value={dropdownOption} onChange={e => updateSelection (e)}>
      {options.map (o => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
};

export default Dropdown;
