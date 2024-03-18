import { useMsal } from "@azure/msal-react";
import { LogoutType } from "../auth /authConfig";

function signOutButton() {
    const { instance } = useMsal();

    const handleSignOut = (logoutType: LogoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/",
            });
        } else if (logoutType === "redirect") {
            instance.logoutRedirect({
                postLogoutRedirectUri: "/",
            });
        }
    };


    return (
        <div>
            <button onClick={() => handleSignOut('redirect')}>Sign Out</button>
        </div>
    );
}

export default signOutButton;