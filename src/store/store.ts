import { create } from "zustand";  // Zustand is used to create a global state store
import { devtools } from "zustand/middleware";  // Devtools middleware allows debugging with Redux DevTools
import { v4 as uuidv4 } from "uuid";  // Importing uuid to generate unique IDs for each patient
import { DraftPatient, Patient } from "../types";  // Importing the type definitions for Patient and DraftPatient

// Define the structure of the patient state and the actions to manipulate it
type PatientState = {
    patients: Patient[];  // Array to hold the list of patients
    activeId: Patient["id"];  // Holds the currently active patient's ID
    addPatient: (data: DraftPatient) => void;  // Function to add a new patient
    deletePatient: (id: Patient["id"]) => void;  // Function to delete a patient by ID
    getPatientById: (id: Patient["id"]) => void;  // Function to set the active patient by ID
}

// Helper function to create a new patient by adding an ID
const createPatient = (patient: DraftPatient) : Patient => {
    return { ...patient, id: uuidv4() };  // Spread the patient data and add a unique ID
}

// Zustand store definition
export const usePatientStore = create<PatientState>()(
    devtools(  // Wrapping the store with devtools for debugging
        (set) => ({
            patients: [],  // Initial state for patients is an empty array
            activeId: "",  // Initially, no patient is active, so activeId is an empty string

            // Function to add a new patient
            addPatient: (data) => {
                const newPatient = createPatient(data);  // Create a new patient object with an ID
                set((state) => ({
                    patients: [...state.patients, newPatient]  // Add the new patient to the array of patients
                }));
            },

            // Function to delete a patient by ID
            deletePatient: (id) => {
                set((state) => ({
                    patients: state.patients.filter(patient => patient.id !== id)  // Remove the patient from the array whose ID matches
                }));
            },

            // Function to set the active patient by their ID
            getPatientById: (id) => {
                set(() => ({
                    activeId: id  // Set the active patient's ID
                }));
            }
        })
    )
);
