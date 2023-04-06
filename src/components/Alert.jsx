import React, { useEffect, useState } from "react";
import NavigatorOnline from "react-navigator-online";
// i want to show it with toastify.
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useNavigatorOnline from "use-navigator-online";

function Alert() {
  const { isOnline, isOffline, backOnline, backOffline } = useNavigatorOnline();
  const [message, setMessage] = useState({
    message_online: "now! you have an internet connection.",
    message_ofline: "now! you have no internet connection.",
  });

  function showMessage(status) {
    {status ? toast.success(message.message_online) : toast.error(message.message_ofline)}
  }

  useEffect(() => {
    
    
  }, [backOnline]);

  useEffect(() => {
    // Do something when network goes offline.
  }, [backOffline]);

//   {let status = (isOnline) ? 'online' : 'offline'}
//   showMessage(status)
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      
      <NavigatorOnline onChange={(status) => showMessage(status)} />
    </div>
  );
}

export default Alert;
