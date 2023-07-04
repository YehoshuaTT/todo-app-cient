import React, { useEffect, useState } from "react";
import { ListService } from "../services/httpService";
import Todos from "./Todos";

function Lists() {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);

  useEffect(() => {
    const fetchLists = async () => {
      const lists = await ListService.listsIndex();
      if (lists) {
        setLists(lists);
        console.log(lists);
      }
    };

    fetchLists();
  }, []);

  const toggleShowTodos = (list) => {
    if (selectedList === list) {
      setSelectedList(null);
    } else {
      setSelectedList(list);
    }
  };

  return (
    <div className="lists-container">
      Lists
      {lists.map((list) => (
        <div key={list.id}>
          <ul
            className="list-ul"
            onClick={() => toggleShowTodos(list)}
            style={{ fontWeight: selectedList === list ? "bold" : "normal" }}
          >
            {list.title}
          </ul>
          {selectedList === list && (
            <ul className="list-todos">
              {list.todos.map((todo) => (
                <Todos key={todo.id} todosFromList={todo} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Lists;
