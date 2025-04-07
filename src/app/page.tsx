'use client';

import { useEffect, useState } from 'react';

type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
  hire_date: string;
};

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]); // Define type explicitly

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('/api/employees');
        const data: Employee[] = await response.json(); // Use the defined type here
        setEmployees(data);
      } catch (error) {
        console.error('Failed to fetch employees', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Hire Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => ( // TypeScript will now recognize 'id'
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              <td>{employee.hire_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
