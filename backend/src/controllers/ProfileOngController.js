import connection from '../database/connection';

const ProfileOngController = {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const cases = await connection('cases').where('ong_id', ong_id).select('*');

    return res.json(cases);
  },
};

export default ProfileOngController;
