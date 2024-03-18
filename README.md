# React + TypeScript + Azure AD Authentication

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
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

```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
