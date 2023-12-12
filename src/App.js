

import './App.css';

import Form from './Components/Form';
function App() {

  // style ={{width:"500px"}} 

  

  return (
   <>
   <div className="row">
   <div className='col-xl-2 col-md-2 col-sm-2' ></div>
   <div className = 'd-flex justify-content-center align -items-center mt-5 col-xl-8 col-md-8 col-sm-8 '  >
    <div className = 'bg-light p-5 rounded' style ={{width:"550px"}}  >
    <h1>Simple Interest App</h1>
    <p>Calculte Your Simple Interest Easily</p>
    <div style={{height:"150px"}} className='bg-warning mt-3 rounded text-center'>
    <h2 id='demo' >&#8377;</h2>
    <p>total simple-interest</p>
    </div>
    
    <Form/>

    </div>
   
   </div>
   <div className='col-xl-2 col-md-2 col-sm-2' ></div>
   </div>
    
   </>
  );
}

export default App;
