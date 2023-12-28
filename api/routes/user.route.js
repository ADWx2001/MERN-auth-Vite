import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', test);

export default router;

// import express from 'express';

// const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Hello from the User Route!');
// });

// export default router;