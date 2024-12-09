import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
  {
    make: { type: String, required: true }, // e.g., Toyota
    model: { type: String, required: true }, // e.g., Corolla
    year: { type: Number, required: true }, // e.g., 2022
    price: { type: Number, required: true }, // e.g., 20000
    isAvailable: { type: Boolean, default: true }, // e.g., true
  },
  { timestamps: true }
);

const Car = mongoose.model('Car', carSchema);

export default Car;