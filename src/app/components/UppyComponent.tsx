import React, { useEffect, useState } from 'react';
import Uppy from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import Compressor from '@uppy/compressor';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js';  // <-- add this line

const UppyComponent = ({setFileText, nextStep}:{
  setFileText: any
  nextStep: any
}) => {

  useEffect(() => {
    const uppy = new Uppy({
      allowMultipleUploads: true,
      restrictions: {
        allowedFileTypes: ['.pdf', '.doc', '.docx', '.txt'],
        maxFileSize: 10000000,
      },
    })
    .use(Dashboard, {
      inline: true,
      target: '#uppyDashboard',
      showProgressDetails: true,
      proudlyDisplayPoweredByUppy: false,
      note: 'Drag and drop resumes here, or click to select files from your device.',
    })
    .use(Compressor);

    uppy.on('file-added', async (file) => {
      try {
        if (file.type === 'application/pdf') {
          const data = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function(event) {
              resolve(event.target?.result);
            };
            reader.onerror = function(event) {
              reject(new Error(`File reading failed: ${event}`));
            };
            reader.readAsArrayBuffer(file.data);
          });
    
          if (data) {
           nextStep()
           setFileText(await getItems(data))
          }
        }
      } catch (err) {
        console.error("An error occurred while processing the PDF:", err);
      }
    });
    

    return () => uppy.close();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div id="uppyDashboard"></div>
  </div>
  );
};

async function getContent(src:any){
  const doc = await pdfjsLib.getDocument(src).promise
  const page = await doc.getPage(1)
  return await page.getTextContent()
}

async function getItems(src:any){
  const content = await getContent(src)
  const strValues = content.items.map((item: any) => item?.str)
  const bigText = strValues.join(' ')
  return bigText
}
export default UppyComponent;
