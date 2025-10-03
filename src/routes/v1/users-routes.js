const express = require('express');
const router = express.Router();

let users = [
  {
    id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    name: "Carlos Navia",
    email: "carlos@example.com",
    role: "user",
    createdAt: "2025-09-12T12:00:00Z"
  }
];

// GET /users
router.get('/', (req, res) => {
  res.status(200).json(users);
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.status(200).json(user);
});

// POST /users
router.post('/', (req, res) => {
  const { name, email, role } = req.body;

  const newUser = {
    id: `${Date.now()}`,
    name,
    email,
    role: role || 'user',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// PUT /users/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  users[index] = { ...users[index], name, email, role };
  res.status(200).json(users[index]);
});

module.exports = router;
