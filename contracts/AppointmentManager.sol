// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AppointmentManager {
    struct Appointment {
        string doctor;
        string patient;
        string datetime;
        string reason;
    }

    Appointment[] public appointments;

    event AppointmentScheduled(string doctor, string patient, string datetime, string reason);
    event AppointmentRemoved(uint index);

    function scheduleAppointment(
        string memory doctor,
        string memory patient,
        string memory datetime,
        string memory reason
    ) public {
        appointments.push(Appointment(doctor, patient, datetime, reason));
        emit AppointmentScheduled(doctor, patient, datetime, reason);
    }

    function getAppointments() public view returns (Appointment[] memory) {
        return appointments;
    }

    // 🔥 This function deletes an appointment at a given index
    function removeAppointment(uint index) public {
        require(index < appointments.length, "Invalid index");

        // Shift elements to the left to overwrite the one being deleted
        for (uint i = index; i < appointments.length - 1; i++) {
            appointments[i] = appointments[i + 1];
        }

        appointments.pop(); // Remove last duplicate
        emit AppointmentRemoved(index);
    }
}
