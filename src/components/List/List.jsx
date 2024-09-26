import Card from "../Card/Card"
import "./List.scss"

function List({posts}) {

    return ( posts ?
      <div className="list">
      {posts.map(item => (
     
        <Card key={item.id} item={item}/>
      )  )}  
      </div>  : <div></div>
    )
}

export default List
