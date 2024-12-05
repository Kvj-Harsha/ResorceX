"use client";
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'; // Import updateDoc from firestore
import { app } from '/firebaseConfig.js';
import React, { useEffect, useState } from 'react';
import { ArrowLeftSquare, Link } from 'lucide-react';
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';

function FilePreview({ params }) {
    const db = getFirestore(app);
    const [file, setFile] = useState();

    useEffect(() => {
        console.log(params?.fileId);
        params?.fileId && getFileInfo();
    }, [params?.fileId]); // Include params.fileId in the dependency array

    const getFileInfo = async () => {
        const docRef = doc(db, "uploadedFile", params?.fileId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFile(docSnap.data());
        } else {
            console.log("No such document!");
        }
    }

    const onPasswordSave = async (password) => {
        const docRef = doc(db, "uploadedFile", params?.fileId);
        await updateDoc(docRef, {
            password: password // Ensure password is defined here
        });
    }

    return (
        <div className='py-10 px-20'>
            <Link href='/upload' className='flex gap-3'>
                <ArrowLeftSquare/> Go to Upload
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                <FileInfo file={file} />
                <FileShareForm file={file} onPasswordSave={onPasswordSave} />
            </div>
        </div>
    );
}

export default FilePreview;
