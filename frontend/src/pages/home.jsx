export default function Home() {
  return (
    <div className="pt-20 px-6 flex flex-col items-center text-center">
      <h1 className="text-4xl font-semibold text-gray-800">
        Welcome 👋
      </h1>

      <p className="text-gray-500 mt-2 max-w-xl">
        You are successfully logged in.  
        Explore your dashboard and continue your work.
      </p>

      <div className="mt-8 w-full max-w-md p-6 rounded-xl shadow-md bg-white">
        <h2 className="text-xl font-medium text-gray-700 mb-2">
          Quick Info
        </h2>
        <ul className="text-gray-600 text-sm space-y-1">
          <li>✓ Secure login enabled with AWS Cognito</li>
          <li>✓ MFA ready (Email OTP)</li>
          <li>✓ Tokens auto-managed by Amplify</li>
        </ul>
      </div>
    </div>
  );
}
