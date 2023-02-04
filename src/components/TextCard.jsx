//import { useContext } from "react";
//import { TaskContext } from "../context/TaskContext";

function TextCard({ text }) {
//  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-md mt-4 ml-4 mr-4 mb-4">
      <h1 className="text-xl font-bold capitalize text-center">{text.titulo}</h1>
      <p className="text-gray-500 text-sm p-4 text-center">{text.descripcion}</p>
      <img className="" src={text.imagen} alt="" />
    </div>
  );
}
export default TextCard;