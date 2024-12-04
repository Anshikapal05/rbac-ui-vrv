import React from 'react';
import './User.css'; // Import the CSS file

const usersData = [
  { id: 1, name: 'Michael Brown', email: 'michael.brown@example.com', role: 'Admin', permissions: 'Full Access' },
  { id: 2, name: 'Sophia Clark', email: 'sophia.clark@example.com', role: 'Editor', permissions: 'Edit, View' },
  { id: 3, name: 'David Miller', email: 'david.miller@example.com', role: 'Viewer', permissions: 'View Only' },
  { id: 4, name: 'Olivia Wilson', email: 'olivia.wilson@example.com', role: 'Editor', permissions: 'Edit, View' },
  { id: 5, name: 'James Taylor', email: 'james.taylor@example.com', role: 'Admin', permissions: 'Full Access' },
  { id: 6, name: 'Emily Anderson', email: 'emily.anderson@example.com', role: 'Viewer', permissions: 'View Only' },
  { id: 7, name: 'Liam Thomas', email: 'liam.thomas@example.com', role: 'Editor', permissions: 'Edit, View' },
  { id: 8, name: 'Charlotte Harris', email: 'charlotte.harris@example.com', role: 'Viewer', permissions: 'View Only' },
  { id: 9, name: 'Benjamin Jackson', email: 'benjamin.jackson@example.com', role: 'Admin', permissions: 'Full Access' },
  { id: 10, name: 'Amelia White', email: 'amelia.white@example.com', role: 'Editor', permissions: 'Edit, View' },
];


const User = () => {
  return (
    <div className="user-table-container">
      <h2 className="table-title">User Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.permissions}</td>
              <td>
                <button className="edit-button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
