import { model as createModel, Schema } from 'mongoose';
import ILens from '../interfaces/Lens';
import MongoModel from './MongoModel';

const lensSchema = new Schema<ILens>({
  degree: Number,
  antiGlare: Boolean,
  blueLightFilter: Boolean,
}, {
  versionKey: false,
});

class Lens extends MongoModel<ILens> {
  constructor(model = createModel('Lens', lensSchema)) {
    super(model);
  }
}

export default Lens;
