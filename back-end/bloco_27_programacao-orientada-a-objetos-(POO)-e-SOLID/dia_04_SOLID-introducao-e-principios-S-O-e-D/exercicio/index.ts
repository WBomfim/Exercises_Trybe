import express from 'express';
import plantsRoutes from './plantsRoutes';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/plants', plantsRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
