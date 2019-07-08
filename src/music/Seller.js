import React from 'react';
import './seller.css'
// import { Link, Route } from 'react-router-dom';
// import Product from './Product';

export default class Seller extends React.Component {

    state={
        file: '',
        imagePreviewUrl: ''
    }
    _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
        this.setState({
        file: file,
        imagePreviewUrl: reader.result
        });
    }

    reader.readAsDataURL(file)
    }


render(){
let {imagePreviewUrl} = this.state;
let $imagePreview = null;
if (imagePreviewUrl) {
    $imagePreview = (<img className="imageForum" src={imagePreviewUrl} alt=""/>);
} else {
    $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
}

return (
        <div className="previewComponent">
            <form onSubmit={(e)=>this._handleSubmit(e)}>
                <label>Album Name:</label><br />
                <input></input><br />
                <label>Artist Name:</label><br />
                <input></input><br />
                <label>Image</label><br />
                <input className="fileInput" 
                type="file" 
                onChange={(e)=>this._handleImageChange(e)} />
                <br />
                <div className="imgPreview">
                    {$imagePreview}
                </div>
                <br />
                <button className="submitButton" 
                type="submit">Submit Form</button>
            </form>
        </div>
        )
    }
}

