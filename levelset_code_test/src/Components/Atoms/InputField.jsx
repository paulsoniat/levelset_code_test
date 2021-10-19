const InputField = ({setSelectedOption, selectedOption, inputTitle}) => {
  /*
    This is a simple view component that will takes in a selected input, title, and information setting function to alter what the user wants to pass in
  */
  return (
    <div className="col-12">
      {inputTitle}
      <input
        onChange={e => {
          e.preventDefault ();
          setSelectedOption ({...selectedOption, thumbnailUrl: e.target.value});
        }}
      />
    </div>
  );
};

export default InputField;
