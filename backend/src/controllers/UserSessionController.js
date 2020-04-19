import connection from '../database/connection';

const UserSessionController = {
  async create(req, res) {
    const { email, password } = req.body;

    const userEmail = await connection('users')
      .where('email', email)
      .select('name')
      .first();

    const userPassword = await connection('users')
      .where('password', password)
      .first();

    if (!userEmail) {
      return res.status(400).json({ error: 'User not found' });
    }

    if (!userPassword) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    return res.json(userEmail);
  },
};

export default UserSessionController;
