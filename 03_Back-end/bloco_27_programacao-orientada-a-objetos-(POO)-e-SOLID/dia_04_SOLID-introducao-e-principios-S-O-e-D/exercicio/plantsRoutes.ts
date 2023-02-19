import { Router, Request, Response } from 'express';
import Plants from './Plants';

const router = Router();
const plantsModel = new Plants();

router.get('/', async (req: Request, res: Response) => {
  const plants = await plantsModel.getPlants();
  return res.status(200).json(plants);
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await plantsModel.getPlantById(id);
  if (!plant) return res.status(404).json({ message: 'Plant not Found!' });
  return res.status(200).json(plant);
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleteSucess = await plantsModel.removePlantById(id);
  if (!deleteSucess) return res.status(404).json({ message: 'Plant not Found!' });
  return res.status(204).end();
});

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const newPlant = req.body;
  const plant = await plantsModel.editPlant(id, newPlant);
  return res.status(200).json(plant);
});

router.post('/', async (req: Request, res: Response) => {
  const newPlant = req.body;
  const plant = await plantsModel.savePlant(newPlant);
  return res.status(201).json(plant);
});

export default router;
