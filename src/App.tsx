import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Feature from './components/features';
import AdminPanel from './components/adminPanel';
import './App.css';

const App = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const toggleAdminPanel = () => setShowAdminPanel(!showAdminPanel);
  return (
    <Provider store={store}>
      <div className="App">
        <h1>A/B Testing App</h1>
        <button onClick={toggleAdminPanel} style={{backgroundColor: "skyblue"} }>Admin Panel</button>
        {showAdminPanel && <AdminPanel />}
        <Feature />
      </div>
    </Provider>
  );
};

export default App;
