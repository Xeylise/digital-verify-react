# Digital Verify - React Frontend

Frontend de la plataforma **Digital Verify**, diseñada para la gestión, auditoría y seguimiento de procesos de verificación de identidad (KYC) y cumplimiento regulatorio en plataformas de entretenimiento y apuestas digitales (WinArena).

## 🚀 Tecnologías

- **React 18** (Vite)
- **React Router Dom v6**
- **Bootstrap 5** & **FontAwesome 6**
- **Arquitectura de Componentes Modulares** (35 componentes organizados por dominios)
- **JSDoc y Clean Code**

## 📂 Estructura del Proyecto

```text
src/
├── components/
│   ├── auth/           # Formularios de login, registro y recuperación
│   ├── kyc/            # Flujo de verificación paso a paso y confirmación
│   ├── documents/      # Carga, escaneo, lista y visor modal de documentos
│   ├── verification/   # Bandeja de auditoría, panel de expediente y toma de decisiones
│   ├── tracking/       # Línea de tiempo, estado de verificación, KPIs y trazabilidad
│   ├── notifications/  # Lista de alertas, insignias y modal de detalle
│   ├── common/         # Layout maestro, barra superior, barra lateral, botones y alertas
│   └── index.js        # Barril central de exportación
├── pages/
│   ├── client/         # Vistas de usuario final / jugador
│   └── backoffice/     # Escritorio de control interno y auditoría
├── context/            # Contextos globales de autenticación y notificaciones
├── services/           # Clientes API y servicios de datos mock
└── css/                # Hojas de estilo y temas visuales
```

## 🛠️ Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```
