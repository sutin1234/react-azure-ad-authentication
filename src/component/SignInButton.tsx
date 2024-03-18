import { useMsal } from "@azure/msal-react";
import { LogoutType, loginRequest } from "../auth /authConfig";


function signInButton() {
    const { instance } = useMsal();
    const handleSignIn = (loginType: LogoutType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch((e: any) => {
                console.log(e);
            });
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest)
                .catch((e: any) => {
                    console.log(e);
                });
        }
    };
    return (
        <div>
            <button onClick={() => handleSignIn('redirect')}>Sign In</button>
        </div>
    );
}

export default signInButton;