const NavSearch = ({filterSearchItems}) => {
  /*
    This component will take in a filter function and use the props functions to filter items based on input search
  */
  const onChangeFunction = e => {
    e.preventDefault ();
    filterSearchItems (e.target.value);
  };
  return (
    <div className="col-12 no-padding white-background">
      <input
        placeholder="Search for a cat!"
        onChange={e => {
          onChangeFunction (e);
        }}
      />
    </div>
  );
};

export default NavSearch;
