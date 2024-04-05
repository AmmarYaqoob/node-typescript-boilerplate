import express from 'express';
import UserController from '../controllers/usercontroller';

const router = express.Router();

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;