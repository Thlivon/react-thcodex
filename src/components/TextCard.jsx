//import { useContext } from "react";
//import { TaskContext } from "../context/TaskContext";

//  const { deleteTask } = useContext(TaskContext);

function TextCard({ text }) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-md mt-4 ml-4 mr-4 mb-4 d-flex flex-column align-items-center">
      <h1 className="text-xl font-bold capitalize text-center mb-4" style={{ height: "10%" }}>{text.titulo}</h1>
      <p className="text-gray-500 text-sm p-4 text-center" style={{ height: "35%" }}>{text.descripcion}</p>
      <img className="" src={text.imagen} alt="" style={{ height: "55%" }} />
    </div>
  );
}
export default TextCard;