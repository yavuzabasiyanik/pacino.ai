import { createContext, useContext, useState } from 'react';

const FormContext = createContext(null);

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    mediumText: '',
    select1: '',
    select2: '',
    description: '',
    skills: [],
  });

  return (
    <FormContext.Provider value={[formValues, setFormValues]}>
        {children}
    </FormContext.Provider>
  );
};
