
import './App.css';
import {useState} from "react";

function App() {
  const [ItemCount,setItemCount]=useState(0); 

  const HandlePickUp=()=>{ 
    setItemCount(ItemCount+1); 
  }
  
  return (
    <>
    <div> 
      <p> You have picked up {ItemCount} Items for four shopping List</p>
      <button onClick={HandlePickUp}>Pick up an Item</button>
    </div>
    </>
  );
} 
export default App;
