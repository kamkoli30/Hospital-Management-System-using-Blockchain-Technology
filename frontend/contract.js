export const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const CONTRACT_ABI =[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "doctor",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "patient",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "datetime",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "AppointmentScheduled",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "appointments",
      "outputs": [
        {
          "internalType": "string",
          "name": "doctor",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "patient",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "datetime",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAppointments",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "doctor",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "patient",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "datetime",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "reason",
              "type": "string"
            }
          ],
          "internalType": "struct AppointmentManager.Appointment[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "doctor",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "patient",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "datetime",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "scheduleAppointment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]