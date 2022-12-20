import Dian from "./assets/files/DIAN.png"
import { Button, Input } from "./components";
function App() {
  return (
    <div className="App">
      <img src={Dian} className="img" />
      <Button text={"کلیک کنید"} type={"official"} Click={()=>console.log("clicked")} size={"normal"}/>
      <Input/>
    </div>
  );
}

export default App;
