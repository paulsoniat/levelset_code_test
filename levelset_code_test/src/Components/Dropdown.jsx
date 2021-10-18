import {useState} from 'react'

const Dropdown = ({
    options,
    setSelectedOption,
    currentSelection
  }) => {
    const [dropdownOption, setDropdownOption] = useState(options[0].value);
    const updateSelection = (e) =>{
        e.preventDefault()
        setSelectedOption({...currentSelection, ownerName: e.target.value});
        setDropdownOption(e.target.value)
    }
    return (
        <select
          value={dropdownOption}
          onChange={e => updateSelection(e)}>
          {options.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
    );
  };

export default Dropdown;