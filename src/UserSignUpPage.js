import React from "react";

class UserSignUpPage extends React.Component{

    render(){
        return(
            <form>
                   <h1>Signup</h1>
                   <div>
                        <label>Username</label>
                        <input/>
                   </div>

                   <div>
                        <label>Display Name</label>
                        <input/>

                   </div>
                 
                   <div>
                        <label>Password</label>
                        <input type="password"/>

                   </div>

                   <div>
                        <label>Password Repeat</label>
                        <input type="password"/>

                   </div>

                   <button>Signup</button>



            </form>
         
        );
    }
}

export default UserSignUpPage;