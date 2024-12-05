import Image from 'next/image';
import React from 'react';

function CodeSection({ title, links }) {
  return (
    <div style={{ flex: '1', marginRight: '10px' }} className="border border-white rounded p-5 transition duration-300 hover:border-pink-400">
      <div>
        <span className='text-3xl p-5 hover:text-pink-400'>{title}</span><br /><br />
        {links.map((link, index) => (
          <a key={index} href={link.url} className='p-1 hover:text-pink-400 block'>{link.text}</a>
        ))}
      </div>
    </div>
  );
}

function Page() {
  const cCodes = [
    { text: 'Lab-01', url: '/comingsoon' },
    { text: 'Lab-02', url: '/comingsoon' },
    { text: 'Lab-03', url: '/comingsoon' },
    { text: 'Lab-04', url: '/comingsoon' },
    { text: 'Lab-05', url: '/comingsoon' },
    { text: 'Assignment-01', url: '/comingsoon' },
    { text: 'Assignment-02', url: '/comingsoon' },
    { text: 'Minor-01', url: '/comingsoon' },
    { text: 'Minor-02', url: 'http://localhost:3000/f/xp1HPQ' },
    { text: 'Mid-sem Lab', url: 'http://localhost:3000/f/r5Gydc' },
    { text: 'End-Lab', url: 'http://localhost:3000/f/OaZfBa' },
  ];

  const cppCodes = [
    { text: 'Lab-01', url: 'http://localhost:3000/f/VQcWCV' },
    { text: 'Lab-02', url: 'http://localhost:3000/f/qkmjKZ' },
    { text: 'Lab-03', url: 'http://localhost:3000/f/BOnTTk' },
    { text: 'Lab-04', url: 'http://localhost:3000/f/K9DiHU' },
    { text: 'Lab-05', url: 'http://localhost:3000/f/FTO800' },
    { text: 'Lab-06', url: 'http://localhost:3000/f/mGW2bm' },
    { text: 'Lab-07', url: 'http://localhost:3000/T9f/UDTX' },
    { text: 'Lab-08', url: 'http://localhost:3000/f/WcchjA' },
    { text: 'Lab-09', url: 'http://localhost:3000/f/WMb6pm' },
    { text: 'Lab-10', url: 'http://localhost:3000/f/Y1kJal' },
    { text: 'Asgn-01', url: 'http://localhost:3000/f/X8GeN7' },
  ];

  const hdlCodes = [
    { text: 'Lec-01', url: 'http://localhost:3000/f/mn7DZO' },
    { text: 'Lec-02', url: 'http://localhost:3000/f/1zhPRN' },
    { text: 'Lec-03', url: 'http://localhost:3000/f/BJ8yFs' },
    { text: 'Lec-04', url: 'http://localhost:3000/f/uGxiuj' },
    { text: 'Lec-05', url: 'http://localhost:3000/f/Yrlrl3' },
    { text: 'Lec-06', url: 'http://localhost:3000/f/meRpgg' },
    { text: 'Lec-07', url: 'http://localhost:3000/f/Hutt5z' },
    { text: 'Lec-08', url: 'http://localhost:3000/f/w1XdHl' },
    { text: 'Assgn-01', url: 'http://localhost:3000/f/a1g0oU' },
  ];

  return (
    <div>
      <Image
        src={'/code_banner.gif'}
        alt="Notes"
        width={305}
        height={120}
        style={{ paddingLeft: '30px' }}
      />
      <br /><br />
      <div style={{ display: 'flex' }} className='text-center p-5'>
        <CodeSection title="C Codes!" links={cCodes} />
        <CodeSection title="C++ Codes!" links={cppCodes} />
        <CodeSection title="HDL Codes!" links={hdlCodes} />
      </div>
    </div>
  );
}

export default Page;
