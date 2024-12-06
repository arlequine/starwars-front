import { ApiProvider } from '../context/ApiContext';
import './globals.css';
import ToastContainer from '../components/ToastContainer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ApiProvider>
      <html lang="en">
        <body className="bg-dark-blue text-beige">
          {children}
          <ToastContainer />
        </body>
      </html>
    </ApiProvider>
  );
}