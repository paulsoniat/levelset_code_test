const CatNavSearch = props => {
  const onChangeFunction = e => {
    e.preventDefault ();
    props.filterSearchItems (e.target.value);
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

export default CatNavSearch;
