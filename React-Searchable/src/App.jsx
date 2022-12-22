import React, { useState } from "react";
import { nanoid } from "nanoid";
import {UsersContext} from './Contexts/Context';
import Header from './Components/Header';
import Body from './Components/Body'
import AddUser from "./Components/AddUser";

function App() {
  
  const body = [
    {
      id: "1",
      name: "Jenny",
      surname: "Chan",
      email: "jenny.chan@email.com",
      age: 29,
    },
    {
      id: 2,
      name: "Tony",
      surname: "Frank",
      email: "tony.frank@email.com",
      age: 25,
    },
    {
      id: 3,
      name: "Raymond",
      surname: "Edwarrds",
      email: "r.edwards@gamil.com",
      age: 21,
    },
    {
      id: 4,
      name: "Doga Aleyna",
      surname: "Demir",
      email: "doaaleynademir@gmail.com",
      age: 23,
    },
  ];

  const [deleted,setDeleted] = useState();
  const [search,setSearch] = useState("");
  const [sorting, setSorting] = useState(false);

  const head = [
    {
      name: 'Ad',
      surname: 'Soyad',
      email: 'E-Posta',
      age: 'Yaş',
    }
];

  const contextDeleted = (e) => {
    setDeleted(e)
  };
  const contextSorting = (e) => {
    setSorting(e)
  };
  const contextSearch = (e) => {
    setSearch(e)
  };

  
  return (
    
    <UsersContext.Provider value={{contextDeleted,contextSorting,contextSearch}}>
        
        <Header head={head} deleted={deleted} />
        <Body body={body} sort={sorting} searchable={search} deleted={deleted}/>
        <AddUser ></AddUser>
        
    </UsersContext.Provider>
  )
}

export default App;

