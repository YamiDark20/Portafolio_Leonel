# Portafolio_Leonel

Portafolio donde estarán los proyectos más importantes hechos.

## Requisitos

- **Node.js** >= 16 (recomendado Node.js 18 o 20)
- **npm** >= 8

## Instalación

```bash
cd client
npm install
```

## Ejecutar en desarrollo

```bash
cd client
npm start
```

Esto inicia el servidor de desarrollo en `http://localhost:3000`. La aplicación se recargará automáticamente ante cualquier cambio.

## Build para producción

```bash
cd client
npm run build
```

Genera los archivos estáticos en `client/build/`.

## Probar en Linux

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd Portafolio_Leonel

# 2. Instalar dependencias
cd client
npm install

# 3. Ejecutar en modo desarrollo
npm start

# Opcional: construir para producción
npm run build

# Opcional: servir el build localmente
npx serve -s build
```

## Probar en Windows

```powershell
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd Portafolio_Leonel

# 2. Instalar dependencias
cd client
npm install

# 3. Ejecutar en modo desarrollo
npm start

# Opcional: construir para producción
npm run build

# Opcional: servir el build localmente
npx serve -s build
```

## Dependencias actualizadas

| Dependencia                | Versión anterior | Versión actual |
|----------------------------|-----------------|----------------|
| react                      | ^18.2.0         | ^19.1.0        |
| react-dom                  | ^18.2.0         | ^19.1.0        |
| @testing-library/jest-dom  | ^5.16.5         | ^6.6.3         |
| @testing-library/react     | ^13.4.0         | ^16.3.2        |
| @testing-library/user-event| ^13.5.0         | ^14.6.1        |
| web-vitals                 | ^2.1.4          | ^4.2.4         |
