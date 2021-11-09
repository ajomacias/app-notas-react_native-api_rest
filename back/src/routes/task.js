import { Router } from 'express';
import { getTasks, getTasksCount,getTask, saveTask, editTask, deleteTask } from '../controllers/task';
import bodyParser from 'body-parser';
const router = Router();

router.get('/tasks',getTasks);
router.get('/tasks/count',getTasksCount);
router.get('/task/:id', getTask);
router.post('/task', saveTask);
router.put('/task/:id', editTask);
router.delete('/task/:id', deleteTask);


export default router;
