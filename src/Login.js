import React, { Component } from "react";



class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
      } 

    render () {
        return (
            <div>
                <form>
                    <label>Email<br /><input type="email"Email="email" />
                    </label><br />
                    <label>Password<br /><input type="password" name="psw"/>
                    </label> <br />
                       <input type="submit" value="Submit" />
                       </form>


                       </div> 

        )
        

    }

}
export default Login