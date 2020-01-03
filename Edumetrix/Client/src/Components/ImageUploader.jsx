import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import Imageupload from 'react-images-upload'
import Resizer from 'react-image-file-resizer';

class ImageUploader extends Component {

    constructor(props) {
        super(props)

        this.state = {
            uploader: this.props.props,
            fetchImg: ""
        }
    }

    handleClose = () => {

        this.setState({
            uploader: !this.state.uploader
        })
        this.props.uploadRefresh()
    }

    onDrop = (event) => {

       const file = event[0]
       this.resizingImage(file)

    }

    /**
     * 
     *  this resize function defined for resizing image file size into below 100KB .
     *  after resizing pic converting into url
     */
    resizingImage = async(data) => {
       
        await Resizer.imageFileResizer(
            data,
            500, 
            500,
            'JPEG', 
            50, 
            0,
            uri => {
                   
                console.log("image url",uri);
                
                this.props.getImage(uri)
        //           this.setState({
        //             fetchImg: uri 
        // })
            },
            'base64'
        );
        
        this.handleClose()
    }
        

    render() {

        return (
            <div>
                <Dialog open={this.state.uploader} onClose={this.handleClose}>

                    <div className="ImagePicker">

                        <Imageupload
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={event => this.onDrop(event)}
                            imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                            maxFileSize={52421000}
                        />
                       
                    </div>

                </Dialog>
            </div>
        )
    }
}
export default ImageUploader