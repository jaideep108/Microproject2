import express from 'express';
import {
  getAllCars,
  createCar,
  getCarById,
  updateCar,
  deleteCar,
} from '../controllers/carController.js';

const router = express.Router();

router.get('/cars', getAllCars);        // Get all cars
router.post('/cars', createCar);       // Create a new car
router.get('/cars/:id', getCarById);   // Get a car by ID
router.put('/cars/:id', updateCar);    // Update a car by ID
router.delete('/cars/:id', deleteCar); // Delete a car by ID

export default router;