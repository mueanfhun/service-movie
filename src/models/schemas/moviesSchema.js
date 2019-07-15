import mongoose from 'mongoose';

const moviesSchema = new mongoose.Schema(

  [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      image: { type: String, required: true },
      description: { type: String, required: true },
      genre: { type: String, required: true },
      Rate: { type: String, required: true },
      timemovies: { type: Number, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true },

      showingTime: [
        {
          date: { type: Date },
          sound: { type: String },
          theater: [
            {
              id: { type: Number },
              time: { type: String },
              normalSeat: {
                available: { type: Number },
                price: { type: Number },
              },
              honeymoonSeat: {
                available: { type: Number },
                price: { type: Number },
              },
              pairSeat: {
                available: { type: Number },
                price: { type: Number },
              },

            },
          ],
        },
      ],
    },
  ],
);
const movies = mongoose.model('movies', moviesSchema);

export default movies;
