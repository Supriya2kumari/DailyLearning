import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/actions';

const UserCard = ({ user, onEdit }) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(user.id));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <div className="flex items-center mb-4">
        <img 
          src={user.imageUrl || 'https://via.placeholder.com/100'} 
          alt={user.name} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-3">{user.description}</p>
      
      <div className="text-sm text-gray-600 mb-2">
        <strong>Languages:</strong> {user.languages}
      </div>
      
      <div className="text-sm text-gray-600 mb-2">
        <strong>Education:</strong> {user.education}
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        <strong>Specialization:</strong> {user.specialization}
      </div>
      
      <div className="flex space-x-2 mb-4">
        {user.twitter && (
          <a 
            href={user.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Twitter
          </a>
        )}
        {user.instagram && (
          <a 
            href={user.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            Instagram
          </a>
        )}
      </div>
      
      <div className="flex justify-end mt-auto">
        <button 
          onClick={() => onEdit(user)} 
          className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button 
          onClick={handleDelete} 
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;