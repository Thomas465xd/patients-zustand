import PatientForm from "./components/PatientForm"
import PatientsList from "./components/PatientsList"

function App() {
    return (
        <>
            <div className="container mx-auto mt-20">
                <h1 className="text-5xl font-extrabold text-center md:w-2/3 mx-auto">
                    Patient Monitoring {''}
                    <span className="text-indigo-500">Veterinary</span>
                </h1>

                <div className="mt-12 md:flex">
                    <PatientForm/>
                    <PatientsList/>
                </div>
            </div>
        </>
    )
}

export default App
