import React from "react";
import { useAuth } from "../auth";
import { Navigate } from "react-router-dom";

function LoginPage() {

   const auth = useAuth();

   const [username, setUsername] = React.useState('');

   const login = (e) => {
      e.preventDefault();
      auth.login({ username });
   };

   if(auth.user){
      return (
         <Navigate to='/profile'/>
      );
   }
   
   return (
      <>
         <div>
            <h1>Login Page</h1>
         </div>

         <form onSubmit={login}>
            <label>Usuario:</label>
            <input 
               type="text" 
               name="username" 
               value={username}
               onChange={e => setUsername(e.target.value)}
            />
            <button type="submit">Entrar</button>
         </form>
      </>
   );
}

export { LoginPage };