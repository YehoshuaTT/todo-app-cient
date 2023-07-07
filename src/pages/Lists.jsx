import React, { useEffect, useState } from "react";
import { ListService } from "../services/httpService";
import Todos from "./Todos";
import AddList from "../componnets/AddList";
import DeleteList from "../componnets/DeleteList";
import EditList from "../componnets/EditList";
import AddATodoToList from "../componnets/AddATodoToList";

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
            {/* TODO: add a addTodo button that addes a todo to the specific list */}
            <DeleteList itemId={list._id} setLists={setLists} />
            <EditList
              itemId={list._id}
              setLists={setLists}
              text={{ title: list.title, description: list.description }}
            />
          </ul>

          {selectedList === list && (
            <>
              <ul className="list-with-todos">
                <div className="add-todo-button">
                  <AddATodoToList listId={list._id} setLists={setLists} />
                  <h5>Add Todo</h5>
                </div>
                {list.todos?.map((todo) => (
                  <Todos
                    key={todo._id}
                    todosFromList={[todo]}
                    setLists={setLists}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Lists;
