const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use('/user', userRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
