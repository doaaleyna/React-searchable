
import {useContext, useMemo, useState} from "react";
import {UsersContext} from "../Contexts/Context";

function Body(props) {
  const [deleted, setDeleted] = useState('');

  const { contextDeleted } = useContext(UsersContext);
  contextDeleted(deleted)

    const searchable = props.searchable;
    const data = props.body;

  const filteredData =
      useMemo(()=> {
        const temp = data.filter(item => item.name.toLowerCase().includes(searchable))
        return temp?.length > 0 ? temp : data
      }, [searchable,data])


  return (
    <>
      {
        filteredData.map((item,i) => {
          return(<tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td><button
             className="h-8 px-3 flex items-center rounded bg-red-600 text-white"
             onClick={() => {
              setDeleted(item.id)
              console.log(item.id)
            }
            }>Sil</button></td>
            <td className="h-8 px-2 flex items-center rounded bg-blue-600 text-white"
            >
              Düzenle
            </td>
          </tr> );
        })
      }
    </>
  );
}

export default Body;
