import React, { useEffect, useState } from "react";
import HttpService from "../services/httpService";
import Todos from "./Todos";

function Lists() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const fetchLists = async () => {
      const lists = await HttpService.listsIndex();
      if (lists) {
        setLists(lists);
        console.log(lists);
      }
    };

    fetchLists();
  }, []);

  return (
    <div className="lists-container">
      Lists
      {lists.map((list) => {
        return (
          <>
            <ul className="list-ul">{list.title}</ul>;
            <li className="list-li">
              {list.todos.map((todo) => {
                return <Todos todo={todo} />;
              })}
            </li>
          </>
        );
      })}
    </div>
  );
}
export default Lists;
