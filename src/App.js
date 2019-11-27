import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card/Card';
import { API } from './services/API'

function App() {
  const [userData, setUserData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    const fetchUsers = async () => {
      try {
        setIsLoading(false)
        const response = await fetch(`${API}/user`)
        const result = await response.json()
        setUserData(result.data)
      } catch (error) {
        setIsLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="App">
      <h1>Users list</h1>
      <div style={{ padding: 20, width: '100%' }}>
        <div className="row">
          {
            isLoading ? <h2>Loading...</h2> : userData.map(user => (
              <Card
                key={user.id}
                name={user.firstName}
                image={user.image}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
