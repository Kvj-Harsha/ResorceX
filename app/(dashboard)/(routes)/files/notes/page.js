import Image from 'next/image';
import React from 'react';

function NotesPage() {
  return (
    <div>
      <Image
        src={'/notes.gif'}
        alt="Notes"
        width={305}
        height={100}
        style={{ paddingLeft: '10px' }}
      />
      <br />
      <div className="flex text-center p-10">

        <div className="flex-1 mr-6 border border-white rounded p-5 transition duration-300 hover:border-pink-400">
          <div>
            <span className='text-3xl p-5 hover:text-pink-400'>SEM-1</span><br /><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>MA001 (Mathematics - 1)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>ID110 (Introduction to Programming)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>ID130 (Digital Logic Design)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>ID131 (Digital System Design)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>ID142 (Introduction to AI & DS)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>CS101 (Introduction to Computer Science)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>EE101 (Signals and Systems)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>LA113 (Introduction to disability studies)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>LA114 (Assistive Technology)</a><br />
          </div>
        </div>

        <div className="flex-1 border border-white rounded p-5 transition duration-300 hover:border-pink-400" style={{ marginLeft: '6px' }}>
          <div>
            <span className='text-3xl p-5 hover:text-pink-400'>SEM-2</span><br /><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>MA002 (Mathematics - 2)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>CS103 (Introduction to Object Oriented Programming)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>CS121 (Discrete Structures)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>EE121 (Introduction to Hardware description Language)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>CS211 (Introduction to Computational Sciences)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>ID151 (Independent Project)</a><br />
            <a href='/comingsoon' className='p-5 hover:text-pink-400'>ID161 (Professional Communication Skills and Writing)</a><br />
          </div>
        </div>

      </div>

    </div>

  );
}

export default NotesPage;
