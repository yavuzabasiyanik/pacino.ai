import React, { useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import { FormProvider } from './FormContext';

function MainFormPage() {
  const [step, setStep] = useState(1);
  const [fileText, setFileText] = useState('');

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  console.log(fileText);
  

  return (
    <FormProvider>
        <div>
            {step === 1 && <Form1 nextStep={nextStep} prevStep={prevStep} />}
            {step === 2 && <Form2 nextStep={nextStep} prevStep={prevStep} setFileText={setFileText}/>}
            {step === 3 && <Form3 jobApplicantData={undefined} />}
        </div>
    </FormProvider>

  );
}

export default MainFormPage;
