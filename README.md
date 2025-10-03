# Workout Tracker API - Workout Plans

Este módulo de la API maneja los **planes de entrenamiento** (Workout Plans) y sus **series asociadas**.  
Permite crear, consultar, actualizar y eliminar planes de entrenamiento, así como administrar las series de cada plan.

---

## 📌 Endpoints

### 1. **Obtener todos los planes de entrenamiento**
**GET** `/api/v1/workouts`

- Devuelve la lista completa de planes de entrenamiento.
- **Query params opcionales**:
  - `?fecha=YYYY-MM-DD` → Filtra por fecha programada.

📥 Request:
```http
GET /api/v1/workouts
📤 Response (200 OK):

json
Copiar código
[
  {
    "id": 1,
    "nombre": "Entrenamiento de Fuerza Superior",
    "descripcion": "Enfocado en pecho y espalda",
    "fecha_programada": "2025-11-20",
    "series": [
      {
        "id": 1,
        "ejercicio_id": 1,
        "series": 4,
        "repeticiones_por_serie": 12,
        "peso_kg": 65.5
      }
    ]
  }
]
2. Obtener un plan por ID
GET /api/v1/workouts/:id

📥 Request:

http
Copiar código
GET /api/v1/workouts/1
📤 Response (200 OK):

json
Copiar código
{
  "id": 1,
  "nombre": "Entrenamiento de Fuerza Superior",
  "descripcion": "Enfocado en pecho y espalda",
  "fecha_programada": "2025-11-20",
  "series": [...]
}
📤 Response (400 Bad Request):

json
Copiar código
{ "error": "El parámetro ID debe ser un número válido mayor que 0." }
📤 Response (404 Not Found):

json
Copiar código
{ "error": "Workout no encontrado." }
3. Crear un nuevo plan
POST /api/v1/workouts

📥 Request:

json
Copiar código
{
  "nombre": "Entrenamiento de Brazos",
  "descripcion": "Rutina enfocada en bíceps y tríceps",
  "fecha_programada": "2025-11-25"
}
📤 Response (201 Created):

json
Copiar código
{
  "id": 3,
  "nombre": "Entrenamiento de Brazos",
  "descripcion": "Rutina enfocada en bíceps y tríceps",
  "fecha_programada": "2025-11-25",
  "series": []
}
📤 Response (400 Bad Request):

json
Copiar código
{ "error": "Faltan campos obligatorios: nombre, fecha_programada." }
4. Actualizar un plan completo
PUT /api/v1/workouts/:id

📥 Request:

json
Copiar código
{
  "nombre": "Entrenamiento Avanzado de Piernas",
  "descripcion": "Se agregaron ejercicios de isquiotibiales",
  "fecha_programada": "2025-11-22"
}
📤 Response (200 OK):

json
Copiar código
{
  "id": 2,
  "nombre": "Entrenamiento Avanzado de Piernas",
  "descripcion": "Se agregaron ejercicios de isquiotibiales",
  "fecha_programada": "2025-11-22",
  "series": [...]
}
5. Actualizar un plan parcialmente
PATCH /api/v1/workouts/:id

📥 Request:

json
Copiar código
{
  "descripcion": "Incluye estiramientos al final"
}
📤 Response (200 OK):

json
Copiar código
{
  "id": 2,
  "nombre": "Entrenamiento de Piernas",
  "descripcion": "Incluye estiramientos al final",
  "fecha_programada": "2025-11-22",
  "series": [...]
}
6. Eliminar un plan
DELETE /api/v1/workouts/:id

📤 Response (200 OK):

json
Copiar código
{ "message": "Workout eliminado correctamente." }
📤 Response (404 Not Found):

json
Copiar código
{ "error": "Workout no encontrado." }
7. Obtener series de un workout
GET /api/v1/workouts/:id/series

📥 Request:

http
Copiar código
GET /api/v1/workouts/1/series
📤 Response (200 OK):

json
Copiar código
[
  {
    "id": 1,
    "ejercicio_id": 1,
    "series": 4,
    "repeticiones_por_serie": 12,
    "peso_kg": 65.5
  }
]
8. Agregar series a un workout
POST /api/v1/workouts/:id/series

📥 Request:

json
Copiar código
{
  "ejercicio_id": 3,
  "series": 3,
  "repeticiones_por_serie": 10,
  "peso_kg": 50
}
📤 Response (201 Created):

json
Copiar código
{
  "id": 3,
  "ejercicio_id": 3,
  "series": 3,
  "repeticiones_por_serie": 10,
  "peso_kg": 50
}
⚡ Códigos de Estado
200 OK → Petición exitosa.

201 Created → Recurso creado correctamente.

400 Bad Request → Error en parámetros o cuerpo inválido.

404 Not Found → Recurso no encontrado.

500 Internal Server Error → Error inesperado en el servidor.