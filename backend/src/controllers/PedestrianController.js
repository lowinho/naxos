import Pedestrian from '../models/Pedestrian';

class PedestrianController {
    async index(req, res) {
       try {
        const pedestrian = await Pedestrian.findAll({
          attributes: [
            "id",
            "name",
            "rg",
            "cpf",
            "street",
            "number",
            "district",
            "city",
            "uf",
            "phone"
          ]});
        return res.json(pedestrian);
       } catch (e) {
        console.log(e)
        return res.status(400).json({
          errors: 'Pedestrian not found'
        });
       }
    }

    async store(req, res) {
        try {
          const newPedestrian = await Pedestrian.create(req.body);
          const { id, name, rg, cpf, street, number, district, city, uf, phone } = newPedestrian;
          res.json({ id, name, rg, cpf, street, number, district, city, uf, phone });
       } catch (e) {
        console.log(e)
        res.status(400).json({
          errors: "Error to created pedestrian"
      });
      }
    }

    async show(req, res) {
      try {
        const pedestrian = await Pedestrian.findByPk(req.params.id);
        const { id, name, rg, cpf, street, number, district, city, uf, phone } = pedestrian;
        return res.json({ id, name, rg, cpf, street, number, district, city, uf, phone });
      } catch (e) {
          return res.status(400).json({
            errors: 'Pedestrian not found'
          });
      }
  }

  async update(req, res) {
    try {
      const pedestrian = await Pedestrian.findByPk(req.params.id);

      if (!pedestrian) {
        res.status(400).json({
          errors: 'Pedestrian not found'
        });
      }

      const pedestrianUpdate = await pedestrian.update(req.body);
      const { id, name, rg, cpf, street, number, district, city, uf, phone } = pedestrianUpdate;
      return res.json({ id, name, rg, cpf, street, number, district, city, uf, phone });

    } catch (e) {
        return res.status(400).json({
          errors: 'Pedestrian not found'
        });
    }
}

async delete(req, res) {
  try {
    const pedestrian = await Pedestrian.findByPk(req.params.id);

    if (!pedestrian) {
      res.status(400).json({
        errors: 'Pedestrian not found'
      });
    }

    pedestrian.destroy(req.body);
    return res.json('Pedestrian deleted');

  } catch (e) {
      return res.status(400).json({
        errors: 'Failed to delete pedestrian'
      });
  }
}
}

export default new PedestrianController;
