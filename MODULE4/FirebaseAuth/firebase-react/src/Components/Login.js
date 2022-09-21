
import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signOut } from "../Services/Firebase";



export const Login = () => {
    // invoke the useContext hook with our UserContext to access its global state
  const user = useContext(UserContext);

  const history = useNavigate();
  useEffect(() => {
    // key into our user which holds the state from our context 
    // useEffect will fire in the evnet this value changes
    if (user) {
      navigate("/loggedInPage");
    }
  }, [user, navigate]);

  return (
    <div>
      <section>
        <div>
          <button onClick={signInWithGoogle}>Sign in With google</button>
          <button onClick={signOut}> sign out</button>
      </div>
      </section>

    </div>
  );
};
