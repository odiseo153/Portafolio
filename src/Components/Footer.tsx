import React from 'react';
import { ChevronUp } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-white">
      <div className="container mx-auto px-4 text-center">
        <a href="#top" className="text-gray-600 hover:text-gray-800">
          <ChevronUp className="h-6 w-6 mx-auto" />
          Back to top
        </a>
        <p className="text-gray-600 mt-4">© 2024 John Doe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
