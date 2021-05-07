import './style.css';
import firstpic from "./RJS.jpg" ;
import video from "./get ready.mp4" ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <div style={{border:"solid 1px black " , maxWidth:"100vw"}}>

          <h1 className="title red">RIDHA</h1> <br/>  
          <img style={{width:350 ,height:250 }} src={firstpic} alt ='RJS' /> <br/> 
          <img style={{width:350 ,height:250 }} src="/jsbook.jpg" alt='jsbook'/> 
        
        </div> 
      
        <video style={{width:320 ,height:240 }} controls autostart autoPlay src={video} type="video/mp4"/>
      </header>
    </div>
  );
}

export default App;
