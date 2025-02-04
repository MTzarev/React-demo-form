import './App.css';
import { useState, useEffect } from 'react';

function App() {

let [services, setServices]=useState([]);
const [username, setUsername]=useState('');
  
useEffect(()=>{
fetch('http://localhost:3030/jsonstore/services')
.then(res => res.json())
.then(response =>{
  setServices(Object.values(response));
  }) 
},[]);


  let submitHandler = (e) => {
      e.preventDefault();
      
      let formData = new FormData(e.currentTarget);
      
      let user = formData.get("username");
      let pass = formData.get("password");
      console.log(pass);
    }
const onInputChangeHandler = (e)=>{
  setUsername(e.target.value)
}  

const onServiceChange = (e)=>{
setUsername("");

}
  return (
    <div className="App">
     <form method='POST'onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">UserName: </label>
        <input type="text" name="username" id='username' value={username} onChange={onInputChangeHandler}/>
        </div>
        <div>
          <label htmlFor="passwoer">Password: </label>
        <input type="password" name="password" id="password" />
         
        </div>
<div>
  <label htmlFor="services">Services</label>
  <select name="services" id="services" onClick={onServiceChange} >
   {services.map(x=><option key={x._id} value = {x._id} >{x.name}</option>)}
   
  </select>
</div>
        <input type="submit" value="Login" />
     </form>
    </div>
  );
}

export default App;
