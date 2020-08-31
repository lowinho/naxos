import Control from '../models/Control';

class ControlController {
    async index(req, res) {
       try {
        const control = await Control.findAll({ attributes: [
          "id",
          "date",
          "plate",
          "destiny",
          "enter",
          "exit" ]});
        return res.json(control);
       } catch (e) {
        console.log(e)
        return res.status(400).json({
          errors: 'Control not found'
        });
       }
    }

    async store(req, res) {
        try {
          const newControl = await Control.create(req.body);
          const { id, date, plate, destiny, enter, exit } = newControl;
          res.json({ id, date, plate, destiny, enter, exit });
       } catch (e) {
        console.log(e)
        res.status(400).json({
          errors: "Error to created control to enter and exit"
      });
      }
    }

    async show(req, res) {
      try {
        const control = await Control.findOne(req.params.id);
        const { id, date, plate, destiny, enter, exit } = control;
        return res.json({ id, date, plate, destiny, enter, exit });
      } catch (e) {
          return res.status(400).json({
            errors: 'Control not found'
          });
      }
  }

  async update(req, res) {
    try {
      const control = await Control.findByPk(req.params.id);

      if (!control) {
        res.status(400).json({
          errors: 'Control not found'
        });
      }

      const controlUpdate = await control.update(req.body);
      const { id, date, plate, destiny, enter, exit } = controlUpdate;
      return res.json({ id, date, plate, destiny, enter, exit });

    } catch (e) {
        return res.status(400).json({
          errors: 'Control not found'
        });
    }
}

async delete(req, res) {
  try {
    const controls = await Control.findByPk(req.params.id)

    if (!controls) {
      res.status(400).json({
        errors: 'Control not found'
      });
    }

    controls.destroy(req.body);
    return res.json('User deleted');

  } catch (e) {
    console.log(e)
      return res.status(400).json({
        errors: 'Failed to delete control'
      });
  }
}
}

export default new ControlController;
