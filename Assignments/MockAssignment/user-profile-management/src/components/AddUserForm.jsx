import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

const initialFormState = {
  name: '',
  email: '',
  description: '',
  languages: '',
  education: '',
  specialization: '',
  twitter: '',
  instagram: '',
  imageUrl: ''
};

const initialErrorState = {
  name: false,
  email: false,
  education: false,
  specialization: false
};

const AddUserForm = ({ onCancel }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = { ...initialErrorState };
    let isValid = true;
    
    if (!formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = true;
      isValid = false;
    }
    
    if (!formData.education.trim()) {
      newErrors.education = true;
      isValid = false;
    }
    
    if (!formData.specialization.trim()) {
      newErrors.specialization = true;
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      dispatch(addUser(formData));
      setFormData(initialFormState);
      onCancel();
    }
  };

  const handleBack = () => {
    onCancel(); 
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg h-5/6 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleBack}
            className="text-gray-600 hover:text-gray-800 flex items-center"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
          <h2 className="text-2xl font-bold">Add New User</h2>
          <div className="w-16"></div> 
        </div>
        
        <div className="overflow-y-auto flex-grow pr-2">
          <form id="addUserForm" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="3"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Languages (comma-separated)</label>
              <input
                type="text"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">
                Education <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.education ? 'border-red-500' : ''}`}
              />
              {errors.education && (
                <p className="text-red-500 text-sm mt-1">Education is required</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">
                Specialization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.specialization ? 'border-red-500' : ''}`}
              />
              {errors.specialization && (
                <p className="text-red-500 text-sm mt-1">Specialization is required</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Twitter URL</label>
              <input
                type="url"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Instagram URL</label>
              <input
                type="url"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Profile Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </form>
        </div>
        
        <div className="mt-6 pt-4 border-t flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="addUserForm"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;