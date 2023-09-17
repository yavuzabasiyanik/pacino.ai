import { createContext, useContext, useState } from 'react';

const FormContext = createContext(null);

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }:{
  children: any
}) => {
  const [formValues, setFormValues] = useState({
    mediumText: '',
    description: '',
    skills: [],
  });

  return (
    <FormContext.Provider value={[formValues, setFormValues]}>
        {children}
    </FormContext.Provider>
  );
};
