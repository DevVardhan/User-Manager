import React, { useState } from 'react';

const RegisterUser = () => {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [submit, setSubmit] = useState(false);
  const [socialHandle, setSocialHandle] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Handle image change and set image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    // Generate image preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Handle form submission (e.g., sending data to a server)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name' , name);
    formData.append('socialhandle' , socialHandle);
    formData.append('photo' , image);

    try{
        const respose = await fetch('http://localhost:5000/api/users' , {
            method : 'POST' ,
            body :formData ,
        });

        if(respose.ok){
        console.log("response ok")
        setSubmit(true);
        // Clear the form fields
        setName('');
        setSocialHandle('');
        setImage(null);
        setImagePreview(null)
        }
    }catch(err){
        //
        console.log(err);
    }

  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">User Information Form</h2>

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

      {/* Social Media Handle Input */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Social Media Handle:</label>
        <input
          type="text"
          value={socialHandle}
          onChange={(e) => setSocialHandle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="@yourhandle"
          required
        />
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Profile Picture:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* Image preview */}
        {imagePreview && (
          <div className="mt-4">
            <img src={imagePreview} alt="User Preview" className="h-32 w-32 object-cover rounded-full" />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
      {submit && <div className="mt-2 text-green-500">User created successfully!</div>} {/* Success message */}
    </form>
  );
};

export default RegisterUser;
