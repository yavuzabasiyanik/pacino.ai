import React, { useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import { FormProvider } from './FormContext';

function MainFormPage() {
  const [step, setStep] = useState(1);
  const [fileText, setFileText] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('')

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  

  return (
    <FormProvider>
        <div>
            {step === 1 && <Form1  jobTitle={jobTitle} jobDescription={jobDescription} setJobTitle={setJobTitle} setJobDescription={setJobDescription} nextStep={nextStep} prevStep={prevStep} />}
            {step === 2 && <Form2 nextStep={nextStep} prevStep={prevStep} setFileText={setFileText}/>}
            {step === 3 && <Form3 resume={fileText} jobTitle={jobTitle} jobDescription={jobDescription}/>}
        </div>
    </FormProvider>

  );
}

export default MainFormPage;
