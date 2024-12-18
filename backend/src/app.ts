import express from 'express';
import cors from 'cors';  // Import CORS
import userRoutes from './routes/userRoutes';
import { authMiddleware } from './middleware/authMiddleware';

const app = express();

// Enable CORS for all origins (or specify your frontend URL if you want to limit it)
app.use(cors());  // This will allow requests from all origins

// Apply auth middleware (uncomment if you need authentication)
// app.use(authMiddleware);

app.use(express.json());

// Define routes
app.use('/api', userRoutes);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
