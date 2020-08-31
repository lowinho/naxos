import User from '../models/User';

class UserController {
    async index(req, res) {
       try {
        const users = await User.findAll({ attributes: [ "id", "user", "email" ]});
        return res.json(users);
       } catch (e) {
        console.log(e)
        return res.status(400).json({
          errors: 'User not found'
        });
       }
    }

    async store(req, res) {
        try {
          const newUser = await User.create(req.body);
          const { id, user, email } = newUser;
          res.json({ id, user, email });
       } catch (e) {
        console.log(e)
        res.status(400).json({
          errors: "Error to created user"
      });
      }
    }

    async show(req, res) {
      try {
        const users = await User.findByPk(req.params.id);
        const { id, user, email } = users;
        return res.json({ id, user, email });
      } catch (e) {
          return res.status(400).json({
            errors: 'User not found'
          });
      }
  }

  async update(req, res) {
    try {
      const users = await User.findByPk(req.params.id);

      if (!users) {
        res.status(400).json({
          errors: 'User not found'
        });
      }

      const userUpdate = await users.update(req.body);
      const { id, user, email } = userUpdate;
      return res.json({ id, user, email });

    } catch (e) {
        return res.status(400).json({
          errors: 'User not found'
        });
    }
}

async delete(req, res) {
  try {
    const users = await User.findByPk(req.params.id);

    if (!users) {
      res.status(400).json({
        errors: 'User not found'
      });
    }

    users.destroy(req.body);
    return res.json('User deleted');

  } catch (e) {
      return res.status(400).json({
        errors: 'Failed to delete user'
      });
  }
}
}

export default new UserController;
