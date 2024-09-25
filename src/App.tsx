import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
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

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default App
