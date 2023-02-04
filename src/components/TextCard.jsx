//import { useContext } from "react";
//import { TaskContext } from "../context/TaskContext";

function TextCard({ text }) {
//  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{text.titulo}</h1>
      <p className="text-gray-500 text-sm p-4">{text.descripcion}</p>
    </div>
  );
}
export default TextCard;