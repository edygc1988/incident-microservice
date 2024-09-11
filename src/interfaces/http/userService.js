const axios = require('axios');

// Función para obtener datos de usuario desde el microservicio de usuarios
async function obtenerUsuario(userId, token) {
  try {
    const response = await axios.get(`http://localhost:3000/api/usuarios/${userId}`, {
      headers: { Authorization: `Bearer ${token}` } // Incluye el token para autenticación
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    throw new Error('No se pudo obtener la información del usuario');
  }
}

module.exports = { obtenerUsuario };