import { textos as data } from "../data/textos";
import {useState, useEffect} from "react";
import TextCard from "./TextCard";
//import { Card } from "react-bootstrap";

function TextList() {
  const [textos, setTextos] = useState([]);

  useEffect(()=> {
    setTextos(data)
  }, [])
  
  if(textos.length === 0){
    return <h1 className="text-white text-4xl font-bold text-center">No hay textos para mostrar</h1>
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {textos.map((texto) => (
        <TextCard key={texto.id} text={texto} />
      ))}
    </div>
  );
}

export default TextList;
