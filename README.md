Next.js Keycloak Authentication 


Este proyecto es una aplicación simple desarrollada con Next.js que implementa autenticación con Keycloak para proteger ciertas rutas de la aplicación. El proyecto demuestra cómo integrar Keycloak en un proyecto de Next.js utilizando Docker para ejecutar el servidor de Keycloak.


Descripción del Proyecto
La aplicación contiene dos páginas principales accesibles desde la página de inicio:


ProtectedPage: Una página protegida que requiere autenticación a través de Keycloak. Si el usuario no está autenticado, será redirigido automáticamente a la página de inicio de sesión de Keycloak.

PublicPage: Una página pública que no requiere autenticación.
Funcionalidad Principal

Autenticación con Keycloak: Se utiliza la biblioteca keycloak-js para gestionar la autenticación de usuarios. La configuración de Keycloak se realiza mediante un objeto que incluye la URL del servidor, el nombre del "realm" y el ID del cliente.


Redireccionamiento Condicional: Dependiendo del estado de autenticación del usuario, la aplicación redirige al usuario a la página protegida o de inicio de sesión.


Integración con Next.js: Se utilizan hooks como useEffect y useState para gestionar el estado de la autenticación y el ciclo de vida del componente. Además, se usa useRouter para manejar la navegación en la aplicación.


Requisitos
Para ejecutar esta aplicación, necesitas tener instalado:


Node.js (v14 o superior)
Docker (para ejecutar Keycloak)


Configuración de Keycloak con Docker
Descargar la imagen de Docker de Keycloak:
bash
Copiar código
docker pull quay.io/keycloak/keycloak:latest

Ejecutar el contenedor de Keycloak:
bash
Copiar código
docker run -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:latest \
  start-dev
  
Esto iniciará un servidor de Keycloak en http://localhost:8080. Puedes acceder al administrador de Keycloak con el usuario admin y la contraseña admin.


Configurar el Realm y el Cliente:
Crea un nuevo "realm" llamado reino-users.
Crea un cliente llamado nextjs-app-client con la URL base http://localhost:3000.
Configura los flujos de autenticación y asigna roles si es necesario.
Uso
Clona este repositorio en tu máquina local.

Instala las dependencias con npm install.

Inicia la aplicación con npm run dev.

Accede a http://localhost:3000 en tu navegador.

Usa el botón ProtectedPage para acceder a la página protegida por Keycloak.

Usa el botón PublicPage para acceder a la página pública.


Muchas Gracias por su atención.








This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
