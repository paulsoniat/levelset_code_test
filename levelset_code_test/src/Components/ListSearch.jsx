import CatNavCard from './CatNavCard';
import CatNavSearch from './CatNavSearch';

const ListSearch = (props) => {
    console.log(props, 'props')
    //TODO: add count increase to set Card Display function
    const testHelp = (props) => {
        return props.data.map((catInfo) => {
            return <CatNavCard cardInfo={catInfo} setCardDisplay={props.setCardDisplay}/>
        })
    }
    return (
        <div className="row vw-20">
        <CatNavSearch />
        {testHelp(props)}
      </div>
    );
  }
  
  export default ListSearch;
  