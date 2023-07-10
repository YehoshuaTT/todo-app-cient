import React, { useEffect, useState } from "react";
import { ListService } from "../services/httpService";
import Todos from "./Todos";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DeleteList from "../componnets/DeleteList";
import EditList from "../componnets/EditList";
import AddATodoToList from "../componnets/AddATodoToList";
import { IconButton, TextField } from "@mui/material";

function Lists() {
  const [lists, setLists] = useState([]);
  const [showFields, setShowFields] = useState(false);
  const [title, setTitle] = useState([]);

  const addFunction = async (e) => {
    if (title?.length > 0) {
      if (await ListService.create({ title })) {
        setShowFields(!showFields);
        setLists(await ListService.index());
        setTitle("");
      }
    } else setShowFields(false);
  };

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

  return (
    <div className="lists-container">
      <div className="add-list-button">
        <h1 id="lists-title">Lists</h1>
        <IconButton
          aria-label="add"
          size="large"
          onClick={() => setShowFields(!showFields)}
        >
          <AddBoxOutlinedIcon fontSize="inherit" />
        </IconButton>
      </div>
      {showFields && (
        <>
          <div className="add-list">
            <TextField
              required
              id="outlined-required"
              label="title"
              onChange={(e) => setTitle(e.target.value)}
              onBlur={addFunction}
              autoFocus={true}
            />
          </div>
        </>
      )}
      <div className="all-lists">
        {lists.map((list) => (
          <div key={list._id} className="single-list">
            <div className="list-header">
              <h4 className="single-list-title">
                <EditList
                  itemId={list._id}
                  setLists={setLists}
                  text={{ title: list.title, description: list.description }}
                />
              </h4>
              <div>
                <DeleteList itemId={list._id} setLists={setLists} />
              </div>
            </div>

            {list.todos?.map((todo) => (
              <Todos
                key={todo._id}
                todosFromList={[todo]}
                setLists={setLists}
              />
            ))}
            <div className="add-todo-button">
              <AddATodoToList listId={list._id} setLists={setLists} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lists;
