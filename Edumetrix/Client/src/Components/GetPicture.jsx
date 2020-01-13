
import React, { Component } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import ImageUploader from '../Components/ImageUploader'
import '../CssFiles/GetPicture.css'

class GetPicture extends Component {

constructor(props){
   
    super(props)
   
    this.state = {
        imgupload:false,
        image: ""
    }
}

uploadImage =()=>{
   
    this.setState({
        imgupload:!this.state.imgupload
    })

}

getImage = (image)=>{


   this.setState({
       image: image
   })
    
}
    render() {
        // console.log("picture", this.props.item);

        return (
            <div>
                <Tooltip title = {this.props.item}>
                <div className = "picture-container" onClick = {event=>this.uploadImage(event)}>
                 
                 {((this.state.image)==="")? 
                 <img src = {require('../Assets/defaultPic.jpg')} id ="defaultpic"/>
                 :
                   <img src = {this.state.image} id ="defaultpic" 
                   />}
                   
                    
                </div>
                </Tooltip>
                <div>
                    <button id = "picBtn"  onClick = {event=>this.uploadImage(event)}>
                        {this.props.item}
                    </button>
                </div>
            {
                (this.state.imgupload) ? <ImageUploader props = {this.state.imgupload}
                uploadRefresh = {this.uploadImage} getImage = {this.getImage}
                />:""
            }


            </div>
        )
    }
}

export default GetPicture
