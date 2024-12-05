"use client"
import React, { useEffect, useState } from 'react';
import { ArrowLeftSquare, Link } from 'lucide-react';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';

function FilePreview({ params }) {
    // Your Firebase configuration with API keys
    const firebaseConfig = {
        apiKey: "AIzaSyA6c5cn1EOQT3m6nlUzdCRneOrk1qAFYEc",
        authDomain: "resorcex.firebaseapp.com",
        projectId: "resorcex",
        storageBucket: "resorcex.appspot.com",
        messagingSenderId: "753665973881",
        appId: "1:753665973881:web:7669efd378eea9d24d7ea8",
        measurementId: "G-FRYCF3GVP0"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const [file, setFile] = useState();

    useEffect(() => {
        console.log(params?.fileId);
        params?.fileId && getFileInfo();
    }, [params?.fileId]);

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
            password: password
        });
    }

    return (
        <div className='py-10 px-20'>
            <Link href='/upload' className='flex gap-3'>
                <ArrowLeftSquare/> Go to Upload
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                {/* Display file information and file share form */}
                <FileInfo file={file} />
                <FileShareForm file={file} onPasswordSave={onPasswordSave} />
            </div>
        </div>
    );
}

export default FilePreview;
