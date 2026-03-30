import { useEffect, useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const todos = await fetch("https://dummyjson.com/todos");
    const res = await todos.json();

    setList(res.todos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
  


    <div className="flex flex-wrap justify-center items-center  p-2  bg-blue-100  gap-10">
      {list.map((e) => (
        <div key={e.id} className="flex flex-col gap-2 rounded-xl h-50 w-90 bg-gray-50 justify-center items-center text-center">
          <h1>{e.todo}</h1>
          <p>{e.completed ?"Done":"Not Done"}</p>
          <p>User: {e.userId}</p>
          <button className="bg-black rounded-xl p-2 text-white w-20" >Done</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;