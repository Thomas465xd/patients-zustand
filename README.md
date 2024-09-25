# Veterinary Patient Management App

A modern, user-friendly web application built with **React**, **Zustand**, **TypeScript**, **React Hook Form**, and **React Toastify** for managing patient records in a veterinary clinic. This app allows users to easily add, edit, and delete patient records while providing a seamless user experience with form validation and visual notifications.

## Features

- **Add New Patients**: Fill out a form to add new patients, including details such as the patient's name, caretaker's name, email, discharge date, and symptoms.
- **Update Patient Records**: Easily update any patient’s details by selecting the patient from the list.
- **Delete Patients**: Remove patient records that are no longer needed with a single click.
- **Form Validation**: Built-in validation for patient details using **React Hook Form** ensures that all fields are correctly filled before submission.
- **Real-time Notifications**: Visual feedback and alerts are displayed using **React Toastify** for a smooth user experience.
- **State Management**: Application state is efficiently handled using **Zustand** to manage the list of patients and their data.

## Tech Stack

- **React**: For building the user interface.
- **TypeScript**: Ensuring type safety and better development experience.
- **Zustand**: A small, fast, and scalable state-management library.
- **React Hook Form**: For handling form input and validation.
- **React Toastify**: For visually appealing toast notifications.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Thomas465xd/patients-zustand.git
cd patients-zustand
```

2. Install the dependencies:

```bash
npm install
```

3. Run the app:

```bash
npm run dev
```

This will start the app on [http://localhost:5173](http://localhost:5173).

## Usage

- Fill out the form with patient information to add a new patient.
- The patient list will display all added patients, including their name, caretaker's name, email, discharge date, and other details.
- Click "Edit" on any patient to update their information.
- Click "Delete" to remove a patient from the list.
- Form validation ensures that required fields are filled, and notifications provide feedback for successful actions.

## Dependencies

- `react`
- `typescript`
- `zustand`
- `react-hook-form`
- `react-toastify`
- `uuid`

Install them using:

```bash
npm install react typescript zustand react-hook-form react-toastify uuid
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Deployment

This project is deployed in Vercel

---
Made with ❤️ Thomas Schrödinger
