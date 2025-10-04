Este módulo gestiona los reportes del usuario relacionados con sus entrenamientos, progreso y estadísticas dentro del sistema de Workout Tracker API.
Incluye la generación de reportes automáticos, consultas de progreso y creación/eliminación de reportes personalizados.

📂 Rutas disponibles
Método	Endpoint	Descripción
GET	/reports	Genera un reporte general del usuario (progreso global, ejercicios más frecuentes).
GET	/reports/progress	Devuelve información del progreso semanal y tendencia de rendimiento.
POST	/reports	Crea un nuevo reporte personalizado.
DELETE	/reports/:id	Elimina un reporte específico por su ID.
🧮 Ejemplos de uso
✅ GET /reports

Response 200

{
  "usuario_id": 1,
  "entrenamientos_completados": 8,
  "entrenamientos_totales": 12,
  "porcentaje_completado": 67,
  "ejercicios_frecuentes": ["Press de Banca", "Sentadillas", "Dominadas"]
}

✅ GET /reports/progress

Response 200

{
  "usuario_id": 1,
  "entrenamientos_esta_semana": 3,
  "promedio_semanal": 4,
  "tendencia": "mejorando"
}

🆕 POST /reports

Request Body

{
  "tipo": "mensual",
  "nombre": "Reporte de Progreso de Octubre",
  "parametros": {
    "fecha_inicio": "2025-10-01",
    "fecha_fin": "2025-10-31"
  }
}


Response 201

{
  "id": 1733359552000,
  "tipo": "mensual",
  "nombre": "Reporte de Progreso de Octubre",
  "parametros": {
    "fecha_inicio": "2025-10-01",
    "fecha_fin": "2025-10-31"
  },
  "fecha_creacion": "2025-10-04T18:32:00.000Z"
}


Errores posibles

400 Bad Request → si tipo o nombre están ausentes.

🗑️ DELETE /reports/:id

Request

DELETE /reports/12345


Response 200

{
  "message": "Reporte eliminado",
  "deleted_id": "12345"
}

⚙️ Códigos de estado HTTP
Código	Significado	Contexto
200	OK	Respuesta exitosa en GET o DELETE
201	Created	Reporte creado correctamente
400	Bad Request	Faltan datos requeridos
500	Internal Server Error	Error inesperado en el servidor