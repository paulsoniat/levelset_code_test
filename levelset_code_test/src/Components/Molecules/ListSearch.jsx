import CatNavCard from '../Atoms/CatNavCard';
import CatNavSearch from '../Atoms/CatNavSearch';

const ListSearch = props => {
  const catNavRender = props => {
    return props.data.map (catInfo => {
      return (
        <CatNavCard cardInfo={catInfo} setCardDisplay={props.setCardDisplay} />
      );
    });
  };
  return (
    <div className="cat-nav-list">
      <div className="row">
        <CatNavSearch filterSearchItems={props.filterSearchFunction} />
        {catNavRender (props)}
      </div>
    </div>
  );
};

export default ListSearch;
