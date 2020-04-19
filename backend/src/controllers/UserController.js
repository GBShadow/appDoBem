import generateUniqueId from '../utils/generateUniqueId';
import connection from '../database/connection';

const UserController = {
  async index(req, res) {
    const users = await connection('users').select('*');

    return res.json(users);
  },

  async create(req, res) {
    const { name, email, password, cpf, phone } = req.body;

    const id = generateUniqueId();

    await connection('users').insert({
      id,
      name,
      email,
      password,
      cpf,
      phone,
    });

    res.json({
      id,
      name,
      email,
      cpf,
      phone,
    });
  },
};

export default UserController;
