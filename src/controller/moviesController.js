import movieModel from '../models/schemas/moviesSchema';


const moviesController = async (req, res) => {
  await movieModel.find({}, (err, value) => {
    if (err) {
      res.send(err);
    }
    res.json(value);
  });
};

export default moviesController;
