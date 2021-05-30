import React, { useState } from 'react'
import ProgressBar from "./ProgressBar"

function UploadPicture() {

    const [file, setFile] = useState(null);
    const [error, setError ] = useState(null);

    const types = [ 'image/png' , 'image/jpeg'];

    const handleChange = (e) => {
        const selected = e.target.files[0];
        console.log(selected);
        
        if ( selected && types.includes(selected.type))
            {
                setFile(selected);
                setError("")
            }

        else {
            console.log(selected.type);
            setFile(null);
            setError("Please Select an image file (png or jpg)")
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} /><span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                { file && <div> {file.name} </div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadPicture
