 const employees = []; 
    const addBtn = document.getElementById('addBtn');
    const empTableBody = document.querySelector('#empTable tbody');

    addBtn.addEventListener('click', () => {
    
      const name = document.getElementById('name').value;
      const dept = document.getElementById('dept').value;
      const salary = document.getElementById('salary').value;

    
      const employee = { name, dept, salary };

     
      employees.push(employee);

     
      empTableBody.innerHTML = '';


      employees.forEach(emp => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${emp.name}</td>
          <td>${emp.dept}</td>
          <td>${emp.salary}</td>
        `;
        empTableBody.appendChild(row);
      });

     
      document.getElementById('empForm').reset();
    });