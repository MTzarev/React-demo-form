import './App.css';

function App() {
  let submitHandler = (e) => {
      e.preventDefault();
      
      let formData = new FormData(e.currentTarget);
      
      let user = formData.get("username");
      let pass = formData.get("password");
      
      console.log(pass);

  }

  return (
    <div className="App">
     <form method='POST'onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">UserName: </label>
        <input type="text" name="username" id='username'/>
        </div>
        <div>
          <label htmlFor="passwoer">Password: </label>
        <input type="password" name="password" id="password" />
         
        </div>
<div>
  <label htmlFor="services">Services</label>
  <select name="services" id="services">
    <option value="1">Privet</option>
    <option value="2">Business</option>
    <option value="3">Enter</option>
  </select>
</div>
        <input type="submit" value="Login" />
     </form>
    </div>
  );
}

export default App;
