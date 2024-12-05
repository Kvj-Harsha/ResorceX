import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FilePreview({ file,removeFile }) {
  return (
    <div className='flex items-center gap-2 justify-between border mt-5
     rounded-md p-1 border-blue-400'>
        <div className='flex items-center p-2'>
        <Image src='/file.svg' width={50} height={50} alt='file' />
        <div className='text-left'>
            <h2>{file.name}</h2>
            <h2 className='text-[12px] text-gray-400' >{file?.type} </h2>
            <h2 className='text-[12px] text-gray-400' > {(file.size/1024/1024).toFixed(2)}MB</h2>
        </div>
        </div>
        <X className='cursor-pointer'
         onClick={()=>removeFile()}/>
    </div>
  )
}

export default FilePreview
