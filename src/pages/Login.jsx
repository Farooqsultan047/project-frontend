function Login(){
    return(
        <div className="page-login">
            <h2>Login Page</h2>

            <input placeholder="Email"  type="text"/>
          
            <br/>
            <input placeholder="Password" type="password" />
            
              <p>You have been logged in successfully.</p>
            <button>Login Again</button>

        </div>
    )
}  export default Login;