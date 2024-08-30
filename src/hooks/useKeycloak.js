import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

const keycloakOptions = {
  url: "http://localhost:8080",
  realm: "reinonext",
  clientId: "nextjs-app"
};

const useKeycloak = () => {
  const [keycloak, setKeycloak] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const keycloakInstance = new Keycloak(keycloakOptions);

    const initKeycloak = async () => {
      try {
        const authenticated = await keycloakInstance.init({
          onLoad: 'login-required',
          promiseType: 'native',
          checkLoginIframe: false,
          enableLogging: true
        });

        if (authenticated) {
          setIsAuthenticated(true);
          setKeycloak(keycloakInstance);
        } else {
          keycloakInstance.login();
        }
      } catch (error) {
        console.error('Failed to initialize Keycloak:', error);
      }
    };

    initKeycloak();
  }, []);

  return { keycloak, isAuthenticated };
};

export default useKeycloak;