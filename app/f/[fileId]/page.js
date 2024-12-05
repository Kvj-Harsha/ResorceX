"use client";
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import FileItemC from './_components/FileItemC';
import Link from 'next/link';
import Image from 'next/image';

// Firebase configuration
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

function FileView({ params }) {
    const [file, setFile] = useState();

    useEffect(() => {
        // Fetch file info when `params.fileId` changes
        params.fileId && getFileInfo();
    }, [params.fileId]);

    const getFileInfo = async () => {
        try {
            const docRef = doc(db, "uploadedFile", params?.fileId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                // Set the file state with document data
                setFile(docSnap.data());
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error fetching file info:", error);
        }
    }

    return (
        <div className='bg-[#111827] h-screen w-full flex justify-center items-center flex-col gap-4'>
            <Link href=''>
                <Image
                    src='/logo.gif'
                    alt='logo'
                    width={150}
                    height={100}
                />
            </Link>
            <FileItemC file={file} />
        </div>
    );
}

export default FileView;
