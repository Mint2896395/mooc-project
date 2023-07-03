import React, { useState } from 'react';

const Toggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input type="checkbox" name="toggle" id="toggle" checked={isOpen} onChange={toggleOpen} className="absolute left-[-100%] top-[-100%]" />
      <label htmlFor="toggle" className="absolute cursor-pointer p-2 bg-green-500 w-32 rounded-md text-white text-sm text-center transition duration-500 ease-in-out hover:bg-red-600">
        {isOpen ? 'Close' : 'Open'}
      </label>

      <div className={`message bg-gray-900 text-white absolute top-0 left-0 w-full h-52 p-5 transition duration-300 ease-in-out overflow-hidden box-border ${isOpen ? 'top-0' : '-top-52'}`}>
        <h1 className="text-white">Hello, I'm a hidden message. You found it.</h1>
        <h2 className="font-normal text-base text-white">Now click the Heart button at the bottom to support CSS3</h2>
      </div>
    </div>
  );
};

export default Toggle;
