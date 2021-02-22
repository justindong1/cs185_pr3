import { Component } from 'react';
import './Navbar.css';
import './ImagePage.css';

class ImagePage extends Component {
    constructor() {
        super(); 
    }

    imgOnClick = (img_src) => {
        console.log('clicked img1');
        var modal = document.getElementById("modal"); 
        console.log(modal); 
        modal.style.display='block';
        var modal_img = document.getElementById("modal_img"); 
        console.log(img_src); 
        modal_img.src = img_src; 
        document.addEventListener("click", this.handleClickOutside, true);
    }

    topOnClick = () => {
        console.log("scrolling"); 
        window.scrollTo(0,0); 
    }

    handleClickOutside = (e) => {
        var modal = document.getElementById("modal"); 
        var modal_img = document.getElementById("modal_img"); 
        if(e.target !== modal_img) {
                console.log("clicked out of modal"); 
                if (modal !== null) {
                    modal.style.display = "none";
                }
        } 
    }

    componentDidMount = () => {
        var top_button = document.getElementById("top_button");
        // When the user scrolls down 20px from the top of the document, show the button
        document.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                top_button.style.display = "block";
            } else {
                top_button.style.display = "none";
            }
        };
    }

    render() {
        let modal_id = "modal"; 
        var modal = document.getElementById('modal');

        return(
            <div>
                <div id={modal_id} className="img_modal">
                    <img className="img" id="modal_img"></img>
                </div>
                <div className="img-grid-container">
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img1.jpg")} id="img1" src="./images/img1.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img2.jpg")} id="img2" src="./images/img2.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img3.jpg")} id="img3" src="./images/img3.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img4.jpg")} id="img4" src="./images/img4.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img5.jpg")} id="img5" src="./images/img5.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img6.jpg")} id="img6" src="./images/img6.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img1.jpg")} id="img1" src="./images/img1.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img2.jpg")} id="img2" src="./images/img2.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img3.jpg")} id="img3" src="./images/img3.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img4.jpg")} id="img4" src="./images/img4.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img5.jpg")} id="img5" src="./images/img5.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img6.jpg")} id="img6" src="./images/img6.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img1.jpg")} id="img1" src="./images/img1.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img2.jpg")} id="img2" src="./images/img2.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img3.jpg")} id="img3" src="./images/img3.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img4.jpg")} id="img4" src="./images/img4.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img5.jpg")} id="img5" src="./images/img5.jpg"></img></div>
                    <div className="img-grid-item"><img onClick={() => this.imgOnClick("./images/img6.jpg")} id="img6" src="./images/img6.jpg"></img></div>
                </div>
                <button id="top_button" onClick={() => this.topOnClick()} className="top_button">Back To Top</button>
            </div>
        )
    }
}

export default ImagePage; 