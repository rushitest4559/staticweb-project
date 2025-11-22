import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'

const queryClient = new QueryClient()

// THIS IS THE ONLY awsExports YOU NEED NOW
const awsExports = import.meta.env.VITE_AWS_EXPORTS
  ? JSON.parse(import.meta.env.VITE_AWS_EXPORTS)
  : null

if (!awsExports) {
  console.error('Missing VITE_AWS_EXPORTS env variable!')
} else {
  Amplify.configure(awsExports)
}

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)