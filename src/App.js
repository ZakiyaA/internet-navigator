import * as React from 'react';
import { useNavigatorStatus } from 'react-navigator-status';
import Alert from './components/Alert';
// doesn't show alert initially
// show offline alert forever
// show online alert for 4s





const App = () => {
  // const isOnline = useNavigatorStatus();
  return <Alert  />;
}

export default App