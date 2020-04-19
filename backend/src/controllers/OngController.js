import generateUniqueId from '../utils/generateUniqueId';
import connection from '../database/connection';

const OngController = {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, password, cnpj, adress, phone } = req.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      password,
      cnpj,
      adress,
      phone,
    });

    res.json({
      id,
      name,
      email,
      cnpj,
      adress,
      phone,
    });
  },
};

export default OngController;
