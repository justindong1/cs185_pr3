import { Component } from 'react';
import './Navbar.css';

class TextPage extends Component {
    render() {
        return(
            <div>
                <form className="form">
                    <label for="fname">First name:</label><br></br>
                    <input type="text" id="fname" name="fname"></input><br></br>
                    <label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname"></input><br></br><br></br>
                    <label for="movie">Favorite Movie</label><br></br><br></br>
                    <div>
                        <input type="radio" name="movie" value="Avengers"></input>
                        <label for="huey">Avengers</label>
                    </div>
                    <div>
                        <input type="radio" name="movie" value="Dark Knight"></input>
                        <label for="dewey">Dark Knight</label>
                    </div>
                    <div>
                        <input type="radio" name="movie" value="Tenet"></input>
                        <label for="louie">Tenet</label>
                    </div>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                </form>
          </div>
        )
    }
}

export default TextPage; 