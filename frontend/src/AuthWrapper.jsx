import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar/navbar";

const theme = {
  name: "RushiTheme",
  tokens: {
    colors: {
      brand: {
        primary: { value: "#2563eb" }, // Blue-600
      },
    },
    radii: {
      small: "8px",
      medium: "12px",
      large: "16px",
    },
  },
};

export default function AuthWrapper({ children }) {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Authenticator
        hideSignUp={true}
        // REMOVE usernameAlias → default is USERNAME
        components={{
          Header() {
            return (
              <div className="text-center py-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                  Login 🔐
                </h1>
                <p className="text-gray-500 text-sm">
                  Enter username & password
                </p>
              </div>
            );
          },
          Footer() {
            return (
              <div className="text-center py-3 text-xs text-gray-400">
                © {new Date().getFullYear()} Rushi Systems
              </div>
            );
          }
        }}
        formFields={{
          signIn: {
            username: {
              placeholder: "Enter username",
              label: "Username",
            },
            password: {
              placeholder: "Enter your password",
              label: "Password",
            }
          }
        }}
      >
        {({ signOut, user }) => (
          <>
            <Navbar signOut={signOut} user={user} />
            {children}
          </>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}
