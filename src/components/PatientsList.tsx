import { usePatientStore } from "../store/store"
import PatientDetails from "./PatientDetails"

export default function PatientsList() {

    const patients = usePatientStore(state => state.patients)
    
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            <div className="">
                {patients.length ? (    
                    <>
                        <h2 className="font-black text-3xl text-center">Patients List</h2>
                        <p className="text-lg mt-5 text-center mb-10">
                            Manage your {''}
                            <span className="text-indigo-600 font-bold">Registered Patients</span>
                        </p>
                        {patients.map(patient => (
                            <PatientDetails
                                key={patient.id} 
                                patient={patient}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">No Patients Yet...</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Start adding patients to your list {''}
                            <span className="text-indigo-500 font-bold">and you will see them here</span>
                        </p>
                    </>
                )}  
            </div>
        </div>
    )
}
