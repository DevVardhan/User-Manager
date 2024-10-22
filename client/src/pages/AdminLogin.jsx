import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () =>{

  const adminUser = 'Admin';
  const adminPass = 'password@123';

  const [name, setName] = useState(adminUser);
  const [password, setPassword] = useState(adminPass);
    const [loginValid , setLoginValid] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(name === adminUser && password === adminPass){
          navigate("/admin-panel")
        }else{
          setLoginValid(false);
        }
    }    
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Admin Login</h2>

      {/* Name Input */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="password@123"
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
      {!loginValid && <div className='mt-2 text-red-500'> Invalid Login Credentials</div>}
    </form>
    );
};
export default AdminLogin;