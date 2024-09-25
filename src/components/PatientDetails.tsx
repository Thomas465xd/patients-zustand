import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store/store"
import { toast } from "react-toastify"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProps) {

    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)

    const handleDelete = () => {
        deletePatient(patient.id)
        toast.error("Patient deleted successfully")
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

            <PatientDetailItem
                label="ID"
                data={patient.id}
            />

            <PatientDetailItem
                label="Name"
                data={patient.name}
            />

            <PatientDetailItem
                label="Caretaker"
                data={patient.caretaker}
            />

            <PatientDetailItem
                label="Email"
                data={patient.email}
            />

            <PatientDetailItem
                label="Discharge Date"
                data={patient.date.toString()}
            />

            <PatientDetailItem
                label="Symptoms"
                data={patient.symptoms}
            />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button 
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    type="button"
                    onClick={() => getPatientById(patient.id)}
                >
                    Edit
                </button>

                <button 
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    type="button"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
