import { useEffect, useState } from 'react';
import './App.css';

import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import SignInButton from './component/SignInButton';
import SignOutButton from './component/SignOutButton';

interface User {
  [key: string]: any;
}

function App() {
  const isAuthenticated = useIsAuthenticated();
  const { accounts } = useMsal();
  // useMsalAuthentication(InteractionType.Redirect);
  const [user, setUser] = useState<User>({});
  useEffect(() => {
    console.log({ isAuthenticated, accounts })
    if (accounts.length > 0) {
      setUser(accounts[0])
    }
  }, [isAuthenticated, accounts]);


  return (
    <>
      <div className="collapse navbar-collapse justify-content-end">
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        {isAuthenticated && <div>{JSON.stringify(user, null, 2)}</div>}
      </div>

    </>
  )


}

export default App
