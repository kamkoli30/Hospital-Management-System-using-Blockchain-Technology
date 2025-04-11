async function registerPatient() {
    const name = document.getElementById('patientName').value;
    if (!name) return alert('Please enter a patient name.');
  
    const response = await fetch('/api/patients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
  
    const result = await response.json();
    alert(result.message);
    loadPatients();
  }
  
  async function loadPatients() {
    const response = await fetch('/api/patients');
    const data = await response.json();
  
    const list = document.getElementById('patientList');
    list.innerHTML = '';
    data.forEach(patient => {
      const li = document.createElement('li');
      li.textContent = patient;
      list.appendChild(li);
    });
  }
  
  window.onload = loadPatients;
  