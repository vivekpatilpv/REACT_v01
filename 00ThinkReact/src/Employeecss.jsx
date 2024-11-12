const employees = [
    { id: "E1", name: "Arpit Jain", workExperience: 6 },
    { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
    { id: "E3", name: "Priya Shetty", workExperience: 9 },
    { id: "E4", name: "Aman Sen", workExperience: 1 }
    ];

function Employeecss() { 

return(
    <>
    <h3>Employee CSS</h3>
    {employees.map(emp=>(<li key={emp.id} style={{border: emp.workExperience > 5 ? "solid" : "none", padding:"4px"} }>{emp.name}</li>))}
    </>
);
}

export default Employeecss;
