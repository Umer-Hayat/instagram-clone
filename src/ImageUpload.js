import React from 'react'

function ImageUpload() {
    return (
        <div>
            <input type='text' />
            <input type='file' onChange={handleChange} />

        </div>
    )
}

export default ImageUpload
