import React, { useEffect, useState } from "react";
import { ListService } from "../services/httpService";
import Todos from "./Todos";
import DeleteItem from "../componnets/DeleteItem";
import EditItem from "../componnets/EditItem";
import AddItem from "../componnets/AddItem";

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
      <AddItem type={"lists"} setItem={setLists} />
      {lists.map((list) => (
        <div key={list._id}>
          <ul
            className="list-ul"
            onClick={() => toggleShowTodos(list)}
            style={{ fontWeight: selectedList === list ? "bold" : "normal" }}
          >
            {list.title}
            <DeleteItem type={"lists"} itemId={list._id} setItem={setLists} />
            <EditItem
              type={"lists"}
              itemId={list._id}
              setItem={setLists}
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
