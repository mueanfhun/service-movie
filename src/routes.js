import express from 'express';
import increaseController from './controller/insertController';
import moviesController from './controller/moviesController';
import moviesByID from './controller/moviesByIDController';
import seatController from './controller/seatController';

const router = express.Router();


router.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

router.put('/addmovie', increaseController);
router.get('/movies', moviesController);
router.get('/detail', moviesByID);
router.get('/reserver', seatController);

export default router;
