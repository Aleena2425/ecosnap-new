import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t shadow-sm p-4 text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} EcoSnap. All rights reserved.</p>
    </footer>
  );
};

export default Footer;