import * as React from 'react';
import { useEffect } from 'react';
import { useNavigatorStatus } from 'react-navigator-status';
// import Alert from './components/Alert';
// import Alert from './components/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// doesn't show alert initially
// show offline alert forever
// show online alert for 4s
import Alert from '@mui/material/Alert';




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

  return (
    <>
    {status == 'Online' ? 
  (<div className="status">{status}</div>)
  :
  (<Alert severity="error">
  {/* <AlertTitle>{status}</AlertTitle> */}
  This is an error alert — <strong>check it out!</strong>
</Alert>)
    }
  </>
  );
}


export default App