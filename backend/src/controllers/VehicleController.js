import Vehicle from '../models/Vehicle';

class VehicleController {
    async index(req, res) {
       try {
        const vehicle = await Vehicle.findAll({
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
            "phone",
            "plate",
            "assembler",
            "model",
            "color"
          ]});
        return res.json(vehicle);
       } catch (e) {
        console.log(e)
        return res.status(400).json({
          errors: 'Vehicle not found'
        });
       }
    }

    async store(req, res) {
        try {
          const newVehicle = await Vehicle.create(req.body);
          const { id,
            name,
            rg,
            cpf,
            street,
            number,
            district,
            city,
            uf,
            phone,
            plate,
            assembler,
            model,
            color } = newVehicle;
          res.json({ id,
            name,
            rg,
            cpf,
            street,
            number,
            district,
            city,
            uf,
            phone,
            plate,
            assembler,
            model,
            color });
       } catch (e) {
        console.log(e)
        res.status(400).json({
          errors: "Error to created Vehicle"
      });
      }
    }

    async show(req, res) {
      try {
        const vehicle = await vehicle.findByPk(req.params.id);
        const { id,
          name,
          rg,
          cpf,
          street,
          number,
          district,
          city,
          uf,
          phone,
          plate,
          assembler,
          model,
          color } = Vehicle;
        return res.json({ id,
          name,
          rg,
          cpf,
          street,
          number,
          district,
          city,
          uf,
          phone,
          plate,
          assembler,
          model,
          color });
      } catch (e) {
          return res.status(400).json({
            errors: 'Vehicle not found'
          });
      }
  }

  async update(req, res) {
    try {
      const vehicle = await Vehicle.findByPk(req.params.id);

      if (!vehicle) {
        res.status(400).json({
          errors: 'Vehicle not found'
        });
      }

      const vehicleUpdate = await Vehicle.update(req.body);
      const { id,
        name,
        rg,
        cpf,
        street,
        number,
        district,
        city,
        uf,
        phone,
        plate,
        assembler,
        model,
        color } = vehicleUpdate;
      return res.json({ id,
        name,
        rg,
        cpf,
        street,
        number,
        district,
        city,
        uf,
        phone,
        plate,
        assembler,
        model,
        color });

    } catch (e) {
        return res.status(400).json({
          errors: 'Vehicle not found'
        });
    }
}

async delete(req, res) {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);

    if (!vehicle) {
      res.status(400).json({
        errors: 'Vehicle not found'
      });
    }

    Vehicle.destroy(req.body);
    return res.json('Vehicle deleted');

  } catch (e) {
      return res.status(400).json({
        errors: 'Failed to delete vehicle'
      });
  }
}
}

export default new VehicleController;
