import {useContext,useState} from 'react'
import {UsersContext} from '../Contexts/Context'

function Header(props) {

  const [sort,setSort] = useState('desc');
  const [search,setSearch] = useState("");
  const {contextSorting,contextSearch}= useContext(UsersContext);
  contextSearch(search);
  contextSorting(sort);

  return (
    <>
    <input type="text" onKeyUp={(e) => {
            console.log(e);
            e && setSearch(e.target.value);
        }
        }/>
        {
            props.head.map((item,i ) => {
                return(<tr key={i}>
                    <th>{item.id}</th>
                    <th>{item.name}</th>
                    <th onClick={() => {
                     setSort(sort === 'desc'? 'asc': 'desc')
                    }
                    }>{item.surname}</th>
                    <th>{item.email}</th>
                    <th>{item.age}</th>
                    <th>options</th>
                </tr>)
            })
        }   
 
    </>
  )
}

export default Header;

