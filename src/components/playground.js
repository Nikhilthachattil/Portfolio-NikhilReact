import React, { useState, useEffect } from "react";

function Todo() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleAddTodo = () => {
    const newTodoItem = {
      title: newTitle,
      description: newDescription,
    };
    const updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
  };
  const handleDeleteTodo = (index) => {
    const reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };
  const handleComplete = (index) => {
    const now = new Date();
    const dd = now.getDate();
    const mm = now.getMonth();
    const yyyy = now.getFullYear();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const completedOn =
      dd + "-" + mm + "-" + yyyy + "at" + h + ":" + m + ":" + s;
    const filteredItem = {
      ...allTodos[index],
      completedOn: completedOn,
    };
    const updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
  };
  const handleDeleteCompletedTodo = (index) => {
    const reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem("completedTodos", JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  };
  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem("todolist"));
    const savedCompletedTodo = JSON.parse(
      localStorage.getItem("completedTodos")
    );
    if (savedTodo) {
      setTodos(savedTodo);
    }
    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);
  return (
    <section>
      <div className=" container mt-11 flex flex-col gap-10 text-center align-middle  text-dcream md:text-md font-Dancing justify-center ">
        <div className=" bg-mgreen  md:text-lg rounded-t-xl shadow-xl">
          <h1 className="py-2 text-dcream">TO-DO-APP</h1>
        </div>
        <div className="xl:flex flex-col bg-dred justify-between gap-3 shadow-xl">
          <div className="">
            <label className="ml-14" htmlFor="text">
              Title :
            </label>
            <input
              type="text"
              value={newTitle}
              placeholder="Title"
              className=" text-center rounded-xl my-2 py-1 mx-2 text-claret outline-none justify-start shadow-xl"
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="px-1" htmlFor="text">
              Description :
            </label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Add your Task here"
              className=" text-center rounded-xl md:px-2 sm:m-2 py-1 mx-2 text-claret outline-none justify-start shadow-xl"
            />
          </div>
          <div>
            <button
              className="m-2 rounded-full text-mgreen bg-dcream shadow-xl"
              onClick={handleAddTodo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-mgreen rounded-b-xl">
          <div className="">
            <button
              className={`${
                isCompleteScreen === false && "active"
              } focus:bg-dcream focus:text-mgreen 
              mx-2 my-2 px-5 rounded-xl bg-dred shadow-lg`}
              onClick={() => setIsCompleteScreen(false)}
            >
              ToDo
            </button>
            <button
              className={`${
                isCompleteScreen === true && "active"
              }mx-2 my-2 px-5 rounded-xl bg-dred shadow-lg  focus:bg-dcream
              focus:text-mgreen`}
              onClick={() => setIsCompleteScreen(true)}
            >
              Completed
            </button>
          </div>
          <div className="">
            {allTodos.length > 0 ? (
              <ul className="">
                {isCompleteScreen === false &&
                  allTodos.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="py-2 px-2 my-2 mx-2 flex flex-wrap justify-between bg-dcream font-sans rounded-xl"
                      >
                        <h1 className="text-mgreen py-1 uppercase">
                          {item.title}
                        </h1>
                        <h3 className="text-dred py-1"> {item.description}</h3>
                        <div className="py-1 gap-1">
                          <button className=" text-mgreen mr-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                              onClick={() => handleComplete(index)}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                          <button className=" text-dred">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                              onClick={() => handleDeleteTodo(index)}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </li>
                    );
                  })}
                {isCompleteScreen === true &&
                  completedTodos.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="py-2 px-2 my-2 mx-2 flex flex-wrap justify-between bg-dcream font-sans rounded-xl"
                      >
                        <div className="flex-col">
                          <h1 className="text-mgreen py-1 uppercase">
                            {item.title}
                          </h1>
                          <h3 className="text-dred py-1">
                            {" "}
                            {item.description}
                          </h3>
                          <p className="text-dred py-1 text-xs">
                            completed on:
                            {item.completedOn}
                          </p>
                        </div>
                        <div className="py-1 gap-1">
                          <button className=" text-dred">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                              onClick={() => handleDeleteCompletedTodo(index)}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            ) : (
              <p className="my-5">No Task Added</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Todo;
