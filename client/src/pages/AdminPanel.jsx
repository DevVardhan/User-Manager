import React, { useEffect, useState } from 'react';

function AdminPanel() {
  const [users, setUsers] = useState([]); // State to hold the users
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/allUsers' , {
            method : 'GET', 
        });
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data); // Set the fetched users to state
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchUsers(); // Call the fetch function
  }, []); 

  // Render loading state or users
  if (loading) {
    return <div className=' m-10 text-pretty text-blue-400 w-full justify-center'>Loading users...</div>;
  }

  return (
    <div className=" p-4 bg-gray-100 rounded-lg shadow-md">
  <h1 className=" text-4xl font-semibold mb-2">Admin Panel</h1>
  <h2 className=" text-xl mb-4">All Users</h2>
  
  <table className=" min-w-full bg-white border border-gray-100 rounded-lg overflow-hidden">
    <thead className="bg-gray-300">
      <tr> 
        <th className="text-center py-2 px-4 border-b">User Id</th>
        <th className="py-2 px-4 border-b">Name</th>
        <th className="py-2 px-4 border-b">Social Handle</th>
        <th className="py-2 px-4 border-b">Image</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={user._id} className="hover:bg-gray-100">
          <td className=" text-center py-2 px-4 border-b">#UserId{index + 1}</td> {/* Serial Number */}
          <td className="text-center py-2 px-4 border-b">{user.name}</td>
          <td className="text-center py-2 px-4 border-b">{user.socialhandle}</td>
          <td className="text-center py-2 px-4 border-b">
            {user.photo && (
              <img
                className="w-12 h-12 rounded-full"
                src={`data:image/png;base64,${user.photo.toString('base64')}`} // image not rendering 
                alt={user.name}
              />
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


  );
}

export default AdminPanel;
