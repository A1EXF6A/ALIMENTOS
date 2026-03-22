# Yura | Gestión de Excedentes

## Descripción
Yura es una aplicación diseñada para gestionar excedentes alimentarios, permitiendo a los negocios registrar productos no vendidos, visualizar un historial de registros y consultar estadísticas generales.

## Estructura de la Interfaz

### 1. **Pantalla de Inicio de Sesión**
   - **Formulario de Inicio de Sesión**: Permite a los usuarios ingresar su correo electrónico y contraseña.
   - **Opciones**:
     - Recordarme: Checkbox para recordar la sesión.
     - ¿Olvidaste tu contraseña?: Enlace para recuperar la contraseña.

### 2. **Vista del Dashboard**
   - **Navegación Principal**:
     - Botones:
       - **Dashboard**: Muestra el formulario para registrar excedentes.
       - **Historial**: Muestra los registros creados.
       - **Estadísticas**: Muestra estadísticas generales.
   - **Formulario de Registro de Excedentes**:
     - Campos:
       - Nombre del Producto.
       - Categoría (desplegable).
       - Cantidad Disponible.
       - Hora Límite de Recogida.
       - Precio Original y Precio Oferta.
       - Fotografía del Producto (arrastrar o buscar).
     - Botón: Publicar Excedente.

### 3. **Historial**
   - Muestra una lista de los registros creados previamente.

### 4. **Estadísticas**
   - Muestra estadísticas generales sobre los excedentes registrados.

## Estilos
- **Tema**: Oscuro con colores primarios en verde esmeralda.
- **Diseño**: Moderno y responsivo.
- **Componentes**:
  - Botones con efectos de hover y estados activos.
  - Formularios con validación básica.

## Scripts
- **app.js**: Maneja la lógica de navegación entre vistas y las interacciones del usuario.
  - Cambia entre vistas (login, dashboard, historial, estadísticas).
  - Simula una autenticación básica.

## Instalación y Uso
1. Clona el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   ```
2. Abre el archivo `index.html` en tu navegador.

## Tecnologías Utilizadas
- **HTML5**: Estructura de la interfaz.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript**: Lógica de la aplicación.

## Autor
Desarrollado por el equipo de Yura.

---

¡Gracias por usar Yura! Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.