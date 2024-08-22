'use client';
import Keycloak from 'keycloak-js';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from "./page.module.css";


const keycloakOptions = {
  url: "http://localhost:8080",
  realm: "reino-users",
  clientId: "nextjs-app-client"
};

const ProtectedPage = () => {
  const [keycloak, setKeycloak] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const initKeycloak = async () => {
      const keycloakInstance = new Keycloak(keycloakOptions);
      console.log("iniciando keycloak");
  
      try {
        const authenticated = await keycloakInstance.init({
          onLoad: 'login-required',
          promiseType: 'native',
          checkLoginIframe: false,
          enableLogging: true
        });
  
        if (authenticated) {
          console.log("autenticado, tomando estado y redireccionando");
          setIsAuthenticated(true);
          setKeycloak(keycloakInstance);
        } else {
          console.log("no se ha autenticado, redireccionando al login");
          keycloakInstance.login();
        }
      } catch (error) {
        console.error('Failed to initialize Keycloak:', error);
        router.push('/');
      }
    };
  
    if (!keycloak) {
      console.log("keycloak no inicializado, inicializando ahora");
      initKeycloak();
    } else {
      console.log("keycloak ha sido inicializado correctamente");
    }
  }, [keycloak, router]);
  

  const handleLogout = () => {
    if (keycloak) {
      keycloak.logout();
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.container}>
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
