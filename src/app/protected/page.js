'use client';
import { useRouter } from 'next/navigation';
import useKeycloak from '../../hooks/useKeycloak';
import { useEffect } from 'react';

const ProtectedPage = () => {
  const { keycloak, isAuthenticated } = useKeycloak();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && keycloak) {
      keycloak.login();
    }
  }, [isAuthenticated, keycloak, router]);

  const handleLogout = () => {
    if (keycloak) {
      keycloak.logout();
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Protected Page</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>Redirigiendo al inicio de sesión...</div>
      )}
    </div>
  );
};

export default ProtectedPage;