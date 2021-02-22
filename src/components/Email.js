import { Component } from 'react';
import './Navbar.css';

class Email extends Component {

    onSubmit = () => {
        var email = document.getElementById("email"); 
        var result = document.getElementById("result"); 
        console.log(email.value); 
        if (email.value.includes("@") && (email.value.includes(".com") || email.value.includes(".edu"))) {
            result.innerHTML="Email is valid, contains @ and .com or .edu"; 
        }
        else {
            result.innerHTML="Email is invalid";
        }
    }

    render() {
        return(
            <div>
                <label for="fname">Email:</label><br></br>
                <input type="text" id="email" name="email"></input><br></br>
                <button onClick={() => this.onSubmit()} id="sub">Submit</button>
                <p id="result"></p>
            </div>
        )
    }
}

export default Email; 