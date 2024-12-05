"use client"
import React, { useEffect, useState } from 'react';
import UploadForm from './_components/UploadForm';
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from './../../../_utils/GenerateRandomString';
import { useRouter } from 'next/navigation';

function Upload() {
    const { user } = useUser();
    const [progress, setProgress] = useState();
    const [fileDocId, setfileDocId] = useState();
    const [uploadCompleted, setUploadCompleted] = useState(false);
    const router = useRouter();

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
    const storage = getStorage(app);
    const db = getFirestore(app);

    const uploadFile = (file) => {
        const storageRef = ref(storage, 'file-upload/' + file?.name);
        const metadata = {
            contentType: file.type
        };
        const uploadTask = uploadBytesResumable(storageRef, file, file.type);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setProgress(progress);
                if (progress === 100) {
                    console.log('Snapshot at completion:', snapshot);
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        saveInfo(file, downloadURL);
                    }).catch((error) => {
                        console.error('Error getting download URL:', error);
                    });
                }
            },
            (error) => {
                console.error('Error uploading file:', error);
            }
        );
    };

    const saveInfo = async (file, fileUrl) => {
        const docID = generateRandomString().toString();
        await setDoc(doc(db, "uploadedFile", docID), {
            fileName: file?.name,
            fileSize: file?.size,
            fileType: file?.type,
            fileUrl: fileUrl,
            userEmail: user?.primaryEmailAddress.emailAddress,
            userName: user?.fullName,
            password: '',
            id: docID,
            shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docID
        });
        setfileDocId(docID);
        setUploadCompleted(true); // Set uploadCompleted to true after saving info
    };

    useEffect(() => {
        if (uploadCompleted) {
            setTimeout(() => {
                router.push('/file-preview/' + fileDocId);
            }, 2000);
        }
    }, [uploadCompleted]);

    return (
        <div className='p-5 px-8 md:px-28'>
            <h2 className='text-[20px] text-center m-5'>Start <strong className='text-primary'>Uploading</strong> File and <strong className='text-primary'>Share</strong> it</h2>
            <UploadForm uploadBtnClick={uploadFile} progress={progress} />
        </div>
    );
}

export default Upload;
