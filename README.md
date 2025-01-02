# Sitio Web de la Clínica Clínica

Este es un proyecto de una aplicación web para la **Clínica Clínica**, desarrollado con **React** y utilizando **Bootstrap** para el diseño y organización visual. La aplicación incluye módulos para manejar información de doctores, servicios, y para agendar citas.

## Descripción del Proyecto

El sistema web contiene tres secciones principales, en todas se utilizan **props** para enviar datos entre los componentes:

1. **Vista Principal** (Servicios y Hospital):
   - Esta sección muestra una breve descripción de la clínica y una lista de servicios destacados. 
   - La información del hospital está personalizada con un tono cercano y chileno, reflejando la filosofía de atención de la clínica.
   
2. **Equipo Médico**:
   - Muestra los detalles del personal médico, como sus especialidades, experiencia y datos de contacto. Cada doctor se representa en una tarjeta que se genera dinámicamente a partir de datos almacenados en el estado del componente principal. 
   - Al hacer clic en la tarjeta, se abre un modal con más detalles sobre el doctor seleccionado.
   
3. **Formulario de Citas**:  
   - Permite a los usuarios agendar citas ingresando el nombre del paciente, el doctor seleccionado y la fecha deseada.
   - Al enviar el formulario, la información se muestra en la consola y en la interfaz.

## Tecnologías Utilizadas

- **React**: Para la creación de componentes y manejo del estado.
- **Bootstrap**: Para el diseño y la estilización responsiva.
- **Node.js y npm**: Para la gestión del proyecto y sus dependencias.
- **Vite**: Para el desarrollo y construcción rápida del proyecto.
  
Esta vez, **CSS** fue omitido para generar todos los estilos en **React** y **Bootstrap**.

## Funcionalidades Clave

1. **Uso de Hooks**
   - **`useState`**: Maneja el estado de los doctores, servicios y datos del formulario de citas. Almacena y actualiza las citas agendadas en tiempo real.
   - **`useEffect`**: Carga la lista de doctores y servicios al montar el componente principal.

2. **Manejo del Formulario**
   - Validación en el cliente para asegurar que todos los campos estén completos antes de enviar.
   - Muestra las citas agendadas en la interfaz de manera dinámica.

3. **Ciclo de Vida de Componentes**
   - Renderizado condicional para alternar entre las secciones de **Doctores**, **Servicios** y **Formulario de Citas**.

## Estructura del Proyecto

```plaintext
/evaluacion-m4-ej-3
│
├── src/                   
│   ├── assets/              <-- Para recursos estáticos
│   ├── components/ 
│   │   ├── AppointmentForm.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── ServiceList.jsx
│   │   └── Modal.jsx
│   ├── App.jsx              <-- Componente principal
│   ├── main.jsx             <-- Punto de entrada de React
│
├── node_modules/        
├── .gitignore               
├── eslint.config.js        
├── index.html            
├── package.json           
├── package-lock.json     
├── README.md           
└── vite.config.js           
```

## Instrucciones para Visualizar el Proyecto

### Pasos para Ejecutar el Proyecto

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone <URL del repositorio>
    cd <nombre del repositorio>
    ```

2. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo (mediante Vite):

    ```bash
    npm run dev
    ```

4. Abre el proyecto en tu navegador en la dirección que se muestre (normalmente http://localhost:5173).

## Autor

- Martín Avendaño
