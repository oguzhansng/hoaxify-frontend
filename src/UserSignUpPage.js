import React from "react";
import axios from "axios";

class UserSignUpPage extends React.Component{

     state = {
          username: null,
          displayName: null,
          password : null,
          passwordRepeat : null
     };
     

     onChange = event => {
          const {name,value} = event.target;
          // const value = event.target.value
          // const name = event.target.name
          this.setState({
               [name]: value
          });
     }

     onClickSignUp = event =>{
          event.preventDefault();
          
          const  {username,displayName,password} = this.state;
          const body ={
               username:username,
               displayName:displayName,
               password:password
          }

          axios.post("/api/1.0/users",body);
     }

     // onChangeUsername = event=>{
     //      this.setState({
     //           username: event.target.value
     //      });
     //      }

     // onChangeDisplayName = event=>{
     //      this.setState({
     //           displayName: event.target.value
     //      });
     //      }
          
          
     // onChangePassword = event=>{
     //      this.setState({
     //           password: event.target.value
     //      });
     //      }  
     

     // onChangePasswordRepeat = event=>{
     //      this.setState({
     //           passwordRepeat: event.target.value
     //      });
     //      }  


    render(){
        return(
            <form>
                   <h1>Signup</h1>
                   <div>
                        <label>Username</label>
                        <input name="username" onChange={this.onChange}/>
                   </div>

                   <div>
                        <label>Display Name</label>
                        <input name="displayName" onChange={this.onChange}/>

                   </div>
                 
                   <div>
                        <label>Password</label>
                        <input name="password" onChange={this.onChange} type="password"/>

                   </div>

                   <div>
                        <label>Password Repeat</label>
                        <input name="passwordRepeat" onChange={this.onChange} type="password"/>
                       
                   </div>
                    <button onClick={this.onClickSignUp} >Signup</button>



            </form>
         
        );
    }
}

export default UserSignUpPage;