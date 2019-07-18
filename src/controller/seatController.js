import movieModel from '../models/schemas/moviesSchema';


const calculate = (value) => {
  const changeType = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
  const result = {
    1000: 0,
    500: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  };
  while (value > 0) {
    const coin = changeType.pop();
    const count = Math.floor(value / coin);
    value -= count * coin;
    if (count) {
      result[`${coin}`] = count;
    }
  }
  console.log(result);
  return result;
};

const seatController = async (req, res) => {
  const {
    id,
    time,
    countNormal,
    countHoneymoon,
    countPair,
    date,
    totalPrice,
    payment,
  } = req.body;

  let totalChange;

  console.log(payment);

  await movieModel.findOne({ id }, (err, value) => {
    console.log('id', id);
    if (err) {
      res.status(400);
      res.send(err);
    } else {
      value.showingTime.forEach((element) => {
        if (new Date(element.date).getDate() === new Date(date).getDate()) {
          element.theater.forEach((data) => {
            if (time === data.time) {
              if (countNormal > 0) {
                data.normalSeat.available -= countNormal;
              } if (countHoneymoon > 0) {
                data.honeymoonSeat.available -= countHoneymoon;
              } if (countPair > 0) {
                data.pairSeat.available -= countPair;
              }
              const Change = payment - totalPrice;
              totalChange = calculate(Change);
            }
          });
        }
      });
      value.save();
      res.json(totalChange);
    }
  });
};

export default seatController;
