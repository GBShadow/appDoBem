import connection from '../database/connection';

const OngSessionController = {
  async create(req, res) {
    const { email, password } = req.body;

    const ongEmail = await connection('ongs')
      .where('email', email)
      .select('name')
      .first();

    const ongPassword = await connection('ongs')
      .where('password', password)
      .first();

    if (!ongEmail) {
      return res.status(400).json({ error: 'ONG not found' });
    }

    if (!ongPassword) {
      return res.status(400).json({ error: 'Password invalid' });
    }

    return res.json(ongEmail);
  },
};

export default OngSessionController;
