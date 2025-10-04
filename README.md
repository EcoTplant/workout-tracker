# Workout Tracker API - Workout Exercises

Este módulo administra las **asociaciones entre entrenamientos y ejercicios**, permitiendo registrar cuántas series, repeticiones y peso se usaron en cada ejercicio dentro de un entrenamiento.

---

## 📌 Endpoints

### 1. **Obtener todos los ejercicios de entrenamientos**
**GET** `/api/v1/workout-exercises`

📤 Response (200 OK):
```json
[
  {
    "id": 1,
    "entrenamiento_id": 1,
    "ejercicio_id": 1,
    "series": 4,
    "repeticiones_por_serie": 12,
    "peso_kg": 65.5
  }
]
