
import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "6e4744d8-261a-47e4-a041-726205c6f487",
        authority: "https://login.microsoftonline.com/f1dd2f5c-59f5-4402-98d8-646ca1825afe",
        redirectUri: "http://localhost:5174/"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level: any, message: any, containsPii: any) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            }
        }
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};

export const graphConfig = {
    graphMeEndpoint: "Enter_the_Graph_Endpoint_Herev1.0/me" //e.g. https://graph.microsoft.com/v1.0/me
};

export type LogoutType = 'popup' | 'redirect';