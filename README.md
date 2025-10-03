Workout Tracker API
Una API RESTful completa y robusta desarrollada en Node.js y Express.js para la gestion de entrenamientos, ejercicios y seguimiento de progreso fitness. Esta aplicacion permite a los usuarios crear, organizar y monitorear sus rutinas de ejercicio de manera eficiente.

Descripcion del Proyecto:
Workout Tracker es un sistema backend diseñado para aplicaciones de seguimiento de entrenamientos. Los usuarios pueden registrarse, crear planes de entrenamiento personalizados, realizar un seguimiento detallado de su progreso fisico y generar informes completos sobre su rendimiento. La API sigue los principios RESTful y ofrece operaciones CRUD completas para todos sus recursos.

Caracteristicas Principales:
Gestion completa de usuarios con registro y autenticacion
Catalogo extenso de ejercicios categorizados por tipo y grupo muscular
Creacion y administracion de planes de entrenamiento personalizados
Seguimiento detallado de series, repeticiones y pesos
Programacion de horarios y recordatorios de entrenamiento
Generacion de reportes y estadisticas de progreso
API RESTful con endpoints bien definidos y documentados
Validacion de datos y manejo de errores robusto

Tecnologias Utilizadas:
Node.js - Entorno de ejecucion de JavaScript
Express.js - Framework web para la creacion de APIs
JavaScript (ES6+) - Lenguaje de programacion
Postman - Herramienta para testing de endpoints
dotenv - Gestion de variables de entorno
Git - Control de versiones

Estructura del Proyecto
El proyecto sigue una arquitectura organizada y escalable:
src/controllers/ - Contiene toda la logica de negocio de la aplicacion. Cada archivo maneja un recurso especifico como usuarios, ejercicios, entrenamientos, etc.
src/routes/ - Define todas las rutas de la API organizadas por version (v1). Cada recurso tiene su propio archivo de rutas.
src/routes/v1/ - Contiene las rutas especificas de la version 1 de la API, incluyendo users, exercises, workoutPlan, workoutExercise, workoutHorario y reports.
src/app.js - Archivo principal de la aplicacion que configura Express.js y monta todas las rutas.

Endpoints de la API
La API esta organizada en seis recursos principales, cada uno con operaciones CRUD completas:
Recurso: Users (Usuarios)
Recurso: Exercises (Ejercicios)
Recurso: WorkoutPlan (Planes de Entrenamiento)
Endpoints adicionales para series dentro de los entrenamientos:
Recurso: WorkoutExercise (Series de Ejercicios)
Recurso: WorkoutHorario (Horarios de Entrenamiento)
Recurso: Reports (Reportes)

Codigos de Estado HTTP
La API utiliza codigos de estado HTTP estandar para indicar el resultado de cada solicitud:
200 OK - La solicitud se proceso correctamente y se devuelven los datos solicitados.
201 Created - Un nuevo recurso fue creado exitosamente, generalmente en respuestas a solicitudes POST.
400 Bad Request - La solicitud contiene datos invalidos o falta informacion requerida.
401 Unauthorized - Se requiere autenticacion para acceder al recurso solicitado.
403 Forbidden - El usuario no tiene permisos suficientes para realizar la accion.
404 Not Found - El recurso solicitado no existe en el sistema.
409 Conflict - Ocurre un conflicto, como intentar crear un recurso que ya existe.
500 Internal Server Error - Error interno del servidor que impidio procesar la solicitud.