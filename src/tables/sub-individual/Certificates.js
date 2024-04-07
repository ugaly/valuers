
import React from 'react';
import pdf from './assets/sample.pdf';

const Certificate = () => {
  return (
    <div className="certificate-container">
      <div className="pdf-container">
        <iframe
          title="Certificate PDF"
          src={pdf}
          width="100%"
          height="800px"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default Certificate;
