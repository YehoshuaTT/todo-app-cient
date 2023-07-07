import React, { useEffect, useState } from "react";
import { ListService } from "../services/httpService";
import Todos from "./Todos";
import AddList from "../componnets/AddList";
import DeleteList from "../componnets/DeleteList";
import EditList from "../componnets/EditList";

function Lists() {
  const [selectedList, setSelectedList] = useState(null);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      const lists = await ListService.index();
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
      <AddList setLists={setLists} />
      {lists.map((list) => (
        <div key={list._id}>
          <ul
            className="list-ul"
            onClick={() => toggleShowTodos(list)}
            style={{ fontWeight: selectedList === list ? "bold" : "normal" }}
          >
            {list.title}
            <DeleteList itemId={list._id} setLists={setLists} />
            <EditList
              itemId={list._id}
              setLists={setLists}
              text={{ title: list.title, description: list.description }}
            />
          </ul>

          {selectedList === list && (
            <ul className="list-with-todos">
              {list.todos?.map((todo) => (
                <Todos key={todo._id} todosFromList={[todo]} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Lists;
