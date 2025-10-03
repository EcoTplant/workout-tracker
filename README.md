# Workout Tracker API

## Endpoints

### GET /exercises
- Lista todos los ejercicios.
- **Query params**: `?categoria=fuerza`
- **Status codes**: 200 OK

### GET /exercises/:id
- Obtiene un ejercicio por su ID.
- **Status codes**: 200 OK, 400 Bad Request, 404 Not Found

### POST /exercises
- Crea un nuevo ejercicio.
- **Status codes**: 201 Created, 400 Bad Request

### PUT /exercises/:id
- Actualiza un ejercicio (reemplazo completo).
- **Status codes**: 200 OK, 400 Bad Request, 404 Not Found

### PATCH /exercises/:id
- Actualiza parcialmente un ejercicio.
- **Status codes**: 200 OK, 400 Bad Request, 404 Not Found

### DELETE /exercises/:id
- Elimina un ejercicio.
- **Status codes**: 200 OK, 400 Bad Request, 404 Not Found
