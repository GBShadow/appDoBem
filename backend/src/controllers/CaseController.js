import connection from '../database/connection';

const IncidentController = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('cases').count();

    const cases = await connection('cases')
      .join('ongs', 'ongs.id', '=', 'cases.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'cases.*',
        'ongs.name',
        'ongs.email',
        'ongs.cnpj',
        'ongs.adress',
        'ongs.phone',
      ]);

    res.header('X-Total-Count', count['count(*)']);

    return res.json(cases);
  },

  async create(req, res) {
    const { title, description, qtd } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection('cases').insert({
      title,
      description,
      qtd,
      ong_id,
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incidents = await connection('cases')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incidents.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permited.' });
    }

    await connection('cases').where('id', id).delete();

    return res.status(204).send();
  },
};

export default IncidentController;
