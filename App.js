import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import SignIn from './SignIn';
import TaskManager from './TaskManager';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      {user ? <TaskManager user={user} /> : <SignIn />}
    </div>
  );
}

export default App;
