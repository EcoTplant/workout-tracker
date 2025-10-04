🗓️ Workout Horario Controller

Archivo: src/controllers/workoutHorario.controller.js
Ruta base: /api/v1/workouthorario

Este controlador gestiona los horarios de los entrenamientos programados por los usuarios.
Permite listar, crear, actualizar y eliminar horarios, asegurando que cada horario esté asociado a un entrenamiento específico.

📋 Endpoints disponibles
Método	Ruta	Descripción
GET	/api/v1/workouthorario	Obtiene todos los horarios registrados.
GET	/api/v1/workouthorario/:id	Obtiene un horario específico por su ID.
POST	/api/v1/workouthorario	Crea un nuevo horario de entrenamiento.
PUT	/api/v1/workouthorario/:id	Actualiza un horario existente.
DELETE	/api/v1/workouthorario/:id	Elimina un horario por su ID.
🧩 Ejemplo de objeto horario
{
  "id": 1,
  "entrenamiento_id": 2,
  "fecha_programada": "2025-10-05",
  "hora_inicio": "08:00",
  "hora_fin": "09:00",
  "dias_semana": ["lunes", "miércoles", "viernes"],
  "completado": false
}

🧠 Validaciones principales

Los campos entrenamiento_id, fecha_programada y hora_inicio son obligatorios al crear un horario.

Si se intenta actualizar un horario inexistente, devuelve 404 Not Found.

Si faltan campos requeridos, devuelve 400 Bad Request.

El campo completado puede actualizarse mediante PUT para marcar un horario como finalizado.

🧪 Ejemplo de uso (POST)

Request

POST /api/v1/workouthorario
Content-Type: application/json


Body

{
  "entrenamiento_id": 1,
  "fecha_programada": "2025-10-06",
  "hora_inicio": "07:00",
  "hora_fin": "08:00",
  "dias_semana": ["lunes", "miércoles"]
}


Response

{
  "id": 1733359478234,
  "entrenamiento_id": 1,
  "fecha_programada": "2025-10-06",
  "hora_inicio": "07:00",
  "hora_fin": "08:00",
  "dias_semana": ["lunes", "miércoles"],
  "completado": false
}