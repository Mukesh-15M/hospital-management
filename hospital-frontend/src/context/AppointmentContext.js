import React, { createContext, useState } from "react";

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  // Add appointment (Patient)
  const addAppointment = (data) => {
    const newAppointment = {
      id: Date.now(),
      ...data,
      doctor: "Not Assigned",
      status: "Pending",
      locked: false, // important
    };

    setAppointments([...appointments, newAppointment]);
  };

  // Admin updates
  const updateAppointment = (id, updates) => {
    const updated = appointments.map((appt) =>
      appt.id === id
        ? { ...appt, ...updates, locked: true } // 🔒 lock after admin change
        : appt
    );

    setAppointments(updated);
  };

  return (
    <AppointmentContext.Provider
      value={{ appointments, addAppointment, updateAppointment }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};