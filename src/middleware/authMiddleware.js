// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  console.log("********token*****");  
  if (!token) {
      return res.status(401).json({ message: 'Token de autenticación no proporcionado' });
    }
    
    // Elimina el prefijo "Bearer " del token
    const tokenWithoutBearer = token.replace('Bearer ', '');
    console.log(tokenWithoutBearer);

  try {
   const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
    req.user = decoded.userId; // Almacena el ID del usuario en el objeto req

    next(); // Continúa con la siguiente función en la cadena de middleware
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = authMiddleware;
