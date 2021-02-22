import { Component } from 'react';
import './Navbar.css';
import './VideoPage.css';

class VideoPage extends Component {
    constructor() {
        super(); 
    }

    videoOnClick = (vid_src) => {
        console.log('clicked img1');
        var modal = document.getElementById("vid_modal"); 
        console.log(modal); 
        modal.style.display='block';
        var video = document.getElementById("modal_vid"); 
        video.src = vid_src; 
        document.addEventListener("click", this.handleClickOutside, true);
    }

    topOnClick = () => {
        console.log("scrolling"); 
        window.scrollTo(0,0); 
    }

    handleClickOutside = (e) => {
        var modal = document.getElementById("vid_modal"); 
        var modal_vid = document.getElementById("modal_vid"); 
        if(e.target !== modal_vid) {
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
            <div class="video-grid-container">
            <div class="video-grid-item">
                <video onClick={() => this.videoOnClick("./videos/video1.mp4")} width="400" controls>
                    <source src="videos/video1.mp4" type="video/mp4"/>
                        Your browser does not support HTML video.
                </video>
            </div>
            <div class="video-grid-item">
                <video onClick={() => this.videoOnClick("./videos/video2.mp4")} width="400" controls>
                <source src="videos/video2.mp4" type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
            </div>
            <div class="video-grid-item">
                <video onClick={() => this.videoOnClick("./videos/video3.mp4")} width="400" controls>
                    <source src="videos/video3.mp4" type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
            </div>
            <div class="video-grid-item">
                <video onClick={() => this.videoOnClick("./videos/video1.mp4")} width="400" controls>
                    <source src="videos/video1.mp4" type="video/mp4"/>
                        Your browser does not support HTML video.
                </video>
            </div>
            <div class="video-grid-item">
                <video onClick={() => this.videoOnClick("./videos/video2.mp4")} width="400" controls>
                <source src="videos/video2.mp4" type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
            </div>
            <div class="video-grid-item">
                <video onClick={() => this.videoOnClick("./videos/video3.mp4")} width="400" controls>
                    <source src="videos/video3.mp4" type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
            </div>
            <div class="video-grid-item">
                <video onClick={() => this.videoOnClick("./videos/video1.mp4")} width="400" controls>
                    <source src="videos/video1.mp4" type="video/mp4"/>
                        Your browser does not support HTML video.
                </video>
            </div>
            <div class="video-grid-item">
                <video onClick={() => this.videoOnClick("./videos/video2.mp4")} width="400" controls>
                <source src="videos/video2.mp4" type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
            </div>
            <div class="video-grid-item">
                <video onClick={() => this.videoOnClick("./videos/video3.mp4")} width="400" controls>
                    <source src="videos/video3.mp4" type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
            </div>
            <div class="video-grid-item">
                <video onClick={() => this.videoOnClick("./videos/video1.mp4")} width="400" controls>
                    <source src="videos/video1.mp4" type="video/mp4"/>
                        Your browser does not support HTML video.
                </video>
            </div>
            <div class="video-grid-item">
                <video onClick={() => this.videoOnClick("./videos/video2.mp4")} width="400" controls>
                <source src="videos/video2.mp4" type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
            </div>
            <div class="video-grid-item">
                <video onClick={() => this.videoOnClick("./videos/video3.mp4")} width="400" controls>
                    <source src="videos/video3.mp4" type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
            </div>
        </div>
        <div id="vid_modal" class="vid_modal">
            <video id="modal_vid" width="400" controls>
            <source type="video/mp4"/>
                Your browser does not support HTML video.
            </video>
        </div>
        <button id="top_button" onClick={() => {this.topOnClick()}}class="top_button">Back To Top</button>
        </div>
        )
    }
}

export default VideoPage; 