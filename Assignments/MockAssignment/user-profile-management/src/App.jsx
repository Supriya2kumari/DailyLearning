import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from './redux/actions';
import useLocalStorage from './hooks/useLocalStorage';
import AddUserForm from './components/AddUserForm';
import UserCard from './components/UserCard';
import EditUserModal from './components/EditUserModal';
import SearchAndFilter from './components/SearchAndFilter';

const App = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    languages: '',
    education: '',
    specialization: ''
  });
  
  const [storedUsers, setStoredUsers] = useLocalStorage('users', []);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  
  useEffect(() => {
    if (storedUsers.length > 0) {
      dispatch(setUsers(storedUsers));
    }
  }, []);
  
  useEffect(() => {
    setStoredUsers(users);
  }, [users, setStoredUsers]);
  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  
  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };
  
  const filteredUsers = users.filter(user => {
    const searchMatch = searchTerm === '' || 
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.specialization?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const languagesMatch = filters.languages === '' || 
      (user.languages && user.languages.toLowerCase().includes(filters.languages.toLowerCase()));
    
    const educationMatch = filters.education === '' || 
      (user.education && user.education.toLowerCase().includes(filters.education.toLowerCase()));
    
    const specializationMatch = filters.specialization === '' || 
      (user.specialization && user.specialization.toLowerCase().includes(filters.specialization.toLowerCase()));
    
    return searchMatch && languagesMatch && educationMatch && specializationMatch;
  });

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl  shadow-md ">
        <header className="mb-8 flex justify-between ">
          <h1 className="text-3xl font-bold mb-2 text-blue-900">User Profile Manager</h1>
          <div className="mb-4 flex justify-between">
        {/* <label className="block text-gray-700 mb-2">Search Users</label> */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name, email, description..."
          className="w-100 rounded-full border-none bg-gray-200 p-2 "
        />
        {/* <span className='xl'>🔍</span> */}
        <button
             onClick={() => setShowAddForm(true)}
              className=" px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center"
            > <span className="mr-1">+</span> Add User
           </button>
      </div>

        {/* <div className="mb-6 flex justify-between items-center">
            <button
             onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center"
            > <span className="mr-1">+</span> Add User
           </button>
        </div> */}
          {/* <p className="text-gray-600">Manage your user profiles efficiently</p> */}
        </header>
        
        {/* <div className="mb-6 flex justify-between items-center">
          <button
            onClick={() => setShowAddForm(true)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center"
          >
            <span className="mr-1">+</span> Add User
          </button>
        </div> */}
        
        <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />
        
        {filteredUsers.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No profiles found. Add a new profile to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map(user => (
              <UserCard 
                key={user.id} 
                user={user} 
                onEdit={setEditingUser} 
              />
            ))}
          </div>
        )}
      </div>
      
      {showAddForm && (
        <AddUserForm onCancel={() => setShowAddForm(false)} />
      )}
      
      {editingUser && (
        <EditUserModal 
          user={editingUser} 
          onClose={() => setEditingUser(null)} 
        />
      )}
    </div>
  );
};

export default App;