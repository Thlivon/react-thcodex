import "bootstrap/dist/css/bootstrap.min.css";
import TextList from "./components/TextList";
import NavBar from "./components/NavBar";

function App() {
  const styles = {
    background: {
      backgroundImage:
        "url(https://i.giphy.com/media/7VzgMsB6FLCilwS30v/giphy.gif)",
      backgroundRepeat: "repeat",
      
      
  
     
 
    },
  };

  return (
    <div style={styles.background}>
      <NavBar />
      <TextList />
    </div>
  );
}

export default App;
