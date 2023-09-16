import UppyComponent from "../UppyComponent"
import { useFormContext } from "./FormContext"

const Form2 = ({nextStep, prevStep, setFileText}:{
    nextStep: any
    prevStep: any
    setFileText: any
}) => {

    return (
        <div className="rounded-lg bg-white p-5 text-left shadow-xl">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start">
            <div className="mb-3 flex items-center justify-start space-x-2">
              <h3 className="text-lg font-semibold leading-6 text-gray-900" id="headline">
                Upload Resume
              </h3>
            </div>
          </div>
          <div className="mt-4">
            {/* Make sure UppyComponent is imported correctly */}
            <UppyComponent setFileText={setFileText} nextStep={nextStep}/>
          </div>
        </div>
      </div>
    )
}

export default Form2
