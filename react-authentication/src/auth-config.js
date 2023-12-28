import { LogLevel } from "@azure/msal-browser";

// msalConfig.js
export const msalConfig = {
  auth: {
    clientId: "240f72ba-ee13-4152-accc-cae983208c93",
    authority: "https://login.microsoftonline.com/EPAM.onmicrosoft.com",
    redirectUri: "/",
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false,
    // Other auth-related configurations...
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  // Logging options
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.warn(message);
            return;
          case LogLevel.Verbose:
            console.info(message);
            return;
          case LogLevel.Warning:
            console.log(message);
            return;
          default:
            return;
        }
      },
      piiLoggingEnabled: false, // Set to true to enable logging personally identifiable information (PII)
      // 0: Error, 1: Warning, 2: Info, 3: Verbose
    },
  },
};

export const loginRequest = {
  scopes: ["user.read"],
};
