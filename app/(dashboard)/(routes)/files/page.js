import { px } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

function Files() {
  return (
    <div className='files-container p-5'>

<Image
        src={'/files.gif'}
        alt="Notes"
        width={305}
        height={100}
      />

      <p>Browse through the contents.</p>
      <p>Happy hacking!!</p>

      <div className='files-grid flex files-grid'>
        {/* FileLink component for Notes */}
        <a href="files/notes" className="file-link group block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 "> 
          <div className="file-border"></div>

          <div className="file-content relative flex h-64 w-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="file-text p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 text-black">
              {/* FileIcon for Notes */}
              
              <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 2H3v20h10v-2H5V4h14v10h2V2h-2zm-2 4H7v2h10V6zM7 10h10v2H7v-2zm6 4H7v2h6v-2zm6 4h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2zm0 0h2v-2h-2v2z" fill="#000000"/>
              </svg>

              <h2 className="mt-4 text-lg font-medium sm:text-xl">Notes</h2>
            </div>

            <div className="file-description absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 text-black">
              <h3 className="mt-4 text-lg font-medium sm:text-xl">Notes</h3>
              <p className="mt-4 text-sm sm:text-base">Access latest notes of all subjects.</p>
            </div>
          </div>
        </a>

        {/* FileLink component for Assignment */}
        <a href="files/assignments" className="file-link group block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="file-border"></div>

          <div className="file-content relative flex h-64 w-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="file-text p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 text-black">
              {/* FileIcon for Assignment */}
              <svg fill="#000000" width="50px" height="50px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M1468.214 0v564.698h-112.94V112.94H112.94v1694.092h1242.334v-225.879h112.94v338.819H0V0h1468.214Zm129.428 581.311c22.137-22.136 57.825-22.136 79.962 0l225.879 225.879c22.023 22.023 22.023 57.712 0 79.848l-677.638 677.637c-10.616 10.504-24.96 16.49-39.98 16.49h-225.88c-31.17 0-56.469-25.299-56.469-56.47v-225.88c0-15.02 5.986-29.364 16.49-39.867Zm-155.291 314.988-425.895 425.895v146.031h146.03l425.895-425.895-146.03-146.03Zm-764.714 346.047v112.94H338.82v-112.94h338.818Zm225.88-225.88v112.94H338.818v-112.94h564.697Zm734.106-315.44-115.424 115.425 146.03 146.03 115.425-115.423-146.031-146.031ZM1129.395 338.83v451.758H338.82V338.83h790.576Zm-112.94 112.94H451.759v225.878h564.698V451.77Z" fill-rule="evenodd"/>
</svg>

              <h2 className="mt-4 text-lg font-medium sm:text-xl">Assignment</h2>
            </div>

            <div className="file-description absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 text-black">
              <h3 className="mt-4 text-lg font-medium sm:text-xl">Assignment</h3>
              <p className="mt-4 text-sm sm:text-base">Access your mathematics assignments.</p>
            </div>
          </div>
        </a>

        {/* FileLink component for Another Assignment */}
        <a href="files/codes" className="file-link group block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="file-border"></div>

          <div className="file-content relative flex h-64 w-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="file-text p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 text-black">
              {/* FileIcon for Assignment */}
              <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3929 4.05365L14.8912 4.61112L15.3929 4.05365ZM19.3517 7.61654L18.85 8.17402L19.3517 7.61654ZM21.654 10.1541L20.9689 10.4592V10.4592L21.654 10.1541ZM3.17157 20.8284L3.7019 20.2981H3.7019L3.17157 20.8284ZM20.8284 20.8284L20.2981 20.2981L20.2981 20.2981L20.8284 20.8284ZM14 21.25H10V22.75H14V21.25ZM2.75 14V10H1.25V14H2.75ZM21.25 13.5629V14H22.75V13.5629H21.25ZM14.8912 4.61112L18.85 8.17402L19.8534 7.05907L15.8947 3.49618L14.8912 4.61112ZM22.75 13.5629C22.75 11.8745 22.7651 10.8055 22.3391 9.84897L20.9689 10.4592C21.2349 11.0565 21.25 11.742 21.25 13.5629H22.75ZM18.85 8.17402C20.2034 9.3921 20.7029 9.86199 20.9689 10.4592L22.3391 9.84897C21.9131 8.89241 21.1084 8.18853 19.8534 7.05907L18.85 8.17402ZM10.0298 2.75C11.6116 2.75 12.2085 2.76158 12.7405 2.96573L13.2779 1.5653C12.4261 1.23842 11.498 1.25 10.0298 1.25V2.75ZM15.8947 3.49618C14.8087 2.51878 14.1297 1.89214 13.2779 1.5653L12.7405 2.96573C13.2727 3.16993 13.7215 3.55836 14.8912 4.61112L15.8947 3.49618ZM10 21.25C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981L2.64124 21.3588C3.38961 22.1071 4.33855 22.4392 5.51098 22.5969C6.66182 22.7516 8.13558 22.75 10 22.75V21.25ZM1.25 14C1.25 15.8644 1.24841 17.3382 1.40313 18.489C1.56076 19.6614 1.89288 20.6104 2.64124 21.3588L3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14H1.25ZM14 22.75C15.8644 22.75 17.3382 22.7516 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588L20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25V22.75ZM21.25 14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981L21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.7516 17.3382 22.75 15.8644 22.75 14H21.25ZM2.75 10C2.75 8.09318 2.75159 6.73851 2.88976 5.71085C3.02502 4.70476 3.27869 4.12511 3.7019 3.7019L2.64124 2.64124C1.89288 3.38961 1.56076 4.33855 1.40313 5.51098C1.24841 6.66182 1.25 8.13558 1.25 10H2.75ZM10.0298 1.25C8.15538 1.25 6.67442 1.24842 5.51887 1.40307C4.34232 1.56054 3.39019 1.8923 2.64124 2.64124L3.7019 3.7019C4.12453 3.27928 4.70596 3.02525 5.71785 2.88982C6.75075 2.75158 8.11311 2.75 10.0298 2.75V1.25Z" fill="#1C274C"/>
<path d="M13 2.5V5C13 7.35702 13 8.53553 13.7322 9.26777C14.4645 10 15.643 10 18 10H22" stroke="#1C274C" stroke-width="1.5"/>
<path d="M7 14L6 15L7 16M11.5 16L12.5 17L11.5 18M10 14L8.5 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              <h2 className="mt-4 text-lg font-medium sm:text-xl">Codes</h2>
            </div>
            
            <div className="file-description absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 text-black">
              <h3 className="mt-4 text-lg font-medium sm:text-xl">Codes</h3>
              <p className="mt-4 text-sm sm:text-base">Access your Codes of ITP, CS121, HDL.</p>
            </div>
          </div>
        </a>
        
      </div>
    </div>
  );
}

export default Files;