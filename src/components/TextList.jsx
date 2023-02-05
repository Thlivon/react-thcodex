import { textos as data } from "../data/textos";
import { useState, useEffect } from "react";
import TextCard from "./TextCard";

function TextList() {
  const [textos, setTextos] = useState([]);

  useEffect(() => {
    setTextos(data);
  }, []);

  if (textos.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay textos para mostrar
      </h1>
    );
  }

  const styles = {
    background: {
      backgroundImage:
        "url(https://i.giphy.com/media/U4FkC2VqpeNRHjTDQ5/giphy.gif)", //ITRemFlr5tS39AzQUL g7hbqhnKnewIIBbTu4 U4FkC2VqpeNRHjTDQ5 xUPGcmSyByD8BJ7pcY l3vR3LpUR3uFkFXlC SdNTGnxfCT6eNqxWO8
      backgroundRepeat: "repeat",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
    },
  };

  return (
    <div className="grid grid-cols-3 gap-2" style={styles.background}>
      {textos.map((texto) => (
        <TextCard key={texto.id} text={texto} />
      ))}
    </div>
  );
}

export default TextList;
