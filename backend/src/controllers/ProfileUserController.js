import connection from '../database/connection';

const ProfileUserController = {
  async index(req, res) {
    const ongs = await connection('ongs').select(
      'name',
      'email',
      'adress',
      'phone',
      'cnpj'
    );

    return res.json(ongs);
  },
};

export default ProfileUserController;
