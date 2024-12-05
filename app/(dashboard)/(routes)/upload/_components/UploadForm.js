// UploadForm.js
import React, { useState } from 'react';
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar'; // Import ProgressBar component

function UploadForm({ uploadBtnClick, progress }) {
    const [file, setFile] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null); // Initialized to null

    const onFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        console.log(selectedFile);
        if (selectedFile.size > 200000000) {
            console.log("Size limit exceeded!!");
            setErrorMsg('Maximum File Upload size is 2mb');
            return;
        }
        setErrorMsg(null)
        setFile(selectedFile); // Set the selected file to state
    };

    return (
        <div className='text-center'>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer    dark:border-white-600 dark:hover:border-red-500">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-upload mb-3">
                                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/>
                            </svg>
                        <p className="mb-2 text-lg md:text-2xl text-white-500 dark:text-white-400">
                            Click to upload or 
                            <strong className="text-primary"> drag </strong>
                            and 
                            <strong className="text-primary"> drop </strong>
                        </p>
                        <p className="text-xs text-white-500 dark:text-white-400">PDF, ZIP, C, CPP, SVG, PNG, JPG, GIF (MAX Size 200MB)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={onFileSelect} />
                </label>
            </div>
            {errorMsg ? <AlertMsg msg={errorMsg} /> : null}
            {file ? <FilePreview file={file} removeFile={() => setFile(null)} /> : null}
            <button disabled={!file} className='p-4 bg-primary disabled:bg-gray-500 text-white rounded-full mt-5 w-[30%]' onClick={() => uploadBtnClick(file)}>
                Upload
            </button>
            <ProgressBar progress={progress}/>
        </div>
    );
}

export default UploadForm;
