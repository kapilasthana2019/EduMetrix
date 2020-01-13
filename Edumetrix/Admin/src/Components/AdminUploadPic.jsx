import React, {Component} from 'react'
import Imageupload from 'react-images-upload'

class AdminUploadPic extends Component{

   
    constructor(props){
        super(props)
        this.state = {
            imagebool:false,
            image:""
        }
    }
    
    onDrop = async(event) => {

        await this.setState({
            imagebool: true,
            image:event[0]
        })
       console.log("image file",this.state.image); 
    }

   

    render(){

        return(
            <div>

                <div>
                    {
                        (this.state.imagebool) ?
                         <div>
                             <img src = {this.state.image.name}/>
                         </div>:<Imageupload 
                        //    withIcon={true}
                        //    buttonText='Choose images'
                           onChange={event => this.onDrop(event)}
                           imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                           maxFileSize={52421000}
                           />
                    }
                
                </div>

               

            </div>
        )
    }
}

export default AdminUploadPic