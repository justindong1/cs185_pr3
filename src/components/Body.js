import { Component } from 'react';
import TextPage from './TextPage';
import ImagePage from './ImagePage';
import VideoPage from './VideoPage';
import TablePage from './TablePage';
import Email from './Email';
import "./Navbar.css";

class Body extends Component {
    render() {
        const displayContent = () => {
            if (this.props.active_tab === 1) {
                return <TextPage/>
            }
            else if (this.props.active_tab === 2) {
                return <ImagePage/>
            }
            else if (this.props.active_tab === 3) {
                return <VideoPage/>
            }
            else if (this.props.active_tab === 4) {
                return <TablePage/>
            }
            else if (this.props.active_tab === 5) {
                return <Email/>
            }
        }
        return(
            displayContent()
        )
    }
}

export default Body; 