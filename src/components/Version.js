import { getVersion } from '@tauri-apps/api/app';
import { useEffect, useState } from 'react';
// TODO: This is not returning the version number. 
// NOTE: this feels like it should be super easy but I am missing something.
const Version = () => {
  const [appVersionNumber, setAppVersionNumber] = useState("");
  const appVersion = getVersion();
  
  useEffect(() => {
    // console.log({appVersion});
    if(appVersion.result) {
      setAppVersionNumber(appVersion.result);
    }   
  }, [appVersion, appVersion.status, appVersion.result])

  return (<div>App Version: {appVersionNumber}</div>);
}

export default Version;
