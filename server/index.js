import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: [
            'http://localhost:5174/',
            'http://localhost:3000',
            'http://localhost:5173/',
        ],
        credentials: true,
        optionsSuccessStatus: 200,
    }),
);

app.get('/api/message', cors(), (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

const PORT = 3001;

app.listen(PORT, '0.0.0.0', () =>
    console.log(`Server is running on http://localhost:${PORT}`),
);
