import movieModel from '../models/schemas/moviesSchema';


const moviesByIDController = async (req, res) => {
  const payload = {

    id: req.body.id,
  };
  await movieModel.findOne({ id: payload.id }, (err, value) => {
    console.log(req.body.id);
    if (err) {
      res.send(err);
    }
    res.send(value);
  });
};

export default moviesByIDController;
