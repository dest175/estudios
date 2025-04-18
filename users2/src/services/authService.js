// services/authService.js
import jwt from "jsonwebtoken";

export const loginUser = async (email, password) => {
  const user = await t_usuario.findOne({ where: { email } });
  if (!user) return { status: 404, error: "Usuario no encontrado" };
  
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return { status: 401, error: "Contraseña incorrecta" };
  
  const token = jwt.sign({ id: user.id_usuario }, process.env.JWT_SECRET, { expiresIn: "1h" });
  return { status: 200, token };
};