// Controlador para manejar usuarios
const users = require('../data/users'); // importa tu array o modelo

// Obtener usuarios con filtros
const getUsers = (req, res) => {
  const { role, search } = req.query;
  let result = [...users];

  if (role) {
    result = result.filter(u =>
      u.role && u.role.toLowerCase() === role.toLowerCase()
    );
  }

  if (search) {
    result = result.filter(u =>
      u.name && u.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
};

module.exports = {
  getUsers
};
