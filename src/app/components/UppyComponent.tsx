import React, { useEffect } from 'react';
import Uppy from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import Compressor from '@uppy/compressor';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';  // <-- add this line

const UppyComponent = () => {
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
      console.log('Added file', file);

      try {
        if (file.type === 'application/pdf') {
          const arrayBuffer = await file.data.arrayBuffer();
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          let fullText = '';

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            const text = content.items.map((item) => 'str' in item ? item.str : '').join(' ');
            fullText += `${text}\n`;
          }

          console.log('Extracted Text:', fullText);
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

export default UppyComponent;
