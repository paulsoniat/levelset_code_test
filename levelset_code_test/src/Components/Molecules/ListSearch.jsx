import NavCard from '../Atoms/NavCard';
import NavSearch from '../Atoms/NavSearch';

const ListSearch = ({filterSearchFunction, setCardDisplay, data}) => {
  /*
    This component uses a simple render function to take in data about nav item list and render them displaying simple card info in the nav card component
    On top of that it combines the search component as well as takes in the filter function from the props to filter the rendered results if desired
  */
  const catNavRender = infoList => {
    return infoList.map ((individualInfo, index) => {
      return (
        <NavCard key={index} cardInfo={individualInfo} setCardDisplay={setCardDisplay} />
      );
    });
  };
  return (
    <div className="cat-nav-list">
      <div className="row">
        <NavSearch filterSearchItems={filterSearchFunction} />
        {catNavRender (data)}
      </div>
    </div>
  );
};

export default ListSearch;
