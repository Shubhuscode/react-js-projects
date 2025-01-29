import './App.css';

function TableComponent(props) {
  const data = [
    { name: 'Shubham', email: 'Shubham.g@pinnacle.ocm' },
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ];

  return (
    <div className="text-center">
      <table>
        <thead>
          <tr>
            <th>{props.name} Name</th>
            <th>{props.name} Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
