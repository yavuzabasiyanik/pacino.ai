import MainFormPage from '@/app/components/form-page/MainFormPage';
import React from 'react';

const ContinueRecruiting = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      
      {/* Added header */}
      <h2 style={{ marginBottom: "20px" }}>Continue Recruiting</h2>
      
      <MainFormPage/>
    </div>
  );
};

export default ContinueRecruiting;
