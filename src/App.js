import * as React from 'react';
import { useEffect } from 'react';
import { useNavigatorStatus } from 'react-navigator-status';
import Alert from './components/Alert';
// doesn't show alert initially
// show offline alert forever
// show online alert for 4s





const App = () => {
  const [status, setStatus] = React.useState("Offline");
  const checkOnlineStatus = async () => {
    try {
      const online = await fetch("https://fakestoreapi.com/products");
      return online.status >= 200 && online.status < 300; // either true or false
    } catch (err) {
      return false; // definitely offline
    }
  };
  
  
  console.log("checkOnlineStatus()", checkOnlineStatus())
  
  
 

  useEffect(() => {
    async function updateStatus() {
      const isOnline = await checkOnlineStatus();
      setStatus(isOnline ? "Online" : "Offline");
    }
    updateStatus();
    const interval = setInterval(updateStatus, 10000); // update status every 30 seconds
    return () => clearInterval(interval); // clean up interval on unmount
  }, []);

  return <div className="status">{status}</div>;
}


export default App