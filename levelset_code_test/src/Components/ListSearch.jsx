import CatNavCard from './CatNavCard';
import CatNavSearch from './CatNavSearch';

const ListSearch = (props) => {
    //TODO: add count increase to set Card Display function
    console.log(props, 'this is props')
    const catNavRender = (props) => {
        return props.data.map((catInfo) => {
            return <CatNavCard cardInfo={catInfo} setCardDisplay={props.setCardDisplay}/>
        })
    }
    const rowStyle = {
      "minWidth": "20vw",
  }
    return (
        <div className="row" style={rowStyle}>
        <CatNavSearch filterSearchItems={props.filterSearchFunction} />
        {catNavRender(props)}
      </div>
    );
  }
  
  export default ListSearch;
  