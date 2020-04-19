import connection from '../database/connection';

const OngDetailController = {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const ongs = await connection('ongs')
      .where('id', ong_id)
      .select('name', 'email', 'adress', 'phone', 'cnpj');

    const cases = await connection('cases').where('ong_id', ong_id).select('*');

    return res.json({ cases, ongs });
  },
};

export default OngDetailController;
