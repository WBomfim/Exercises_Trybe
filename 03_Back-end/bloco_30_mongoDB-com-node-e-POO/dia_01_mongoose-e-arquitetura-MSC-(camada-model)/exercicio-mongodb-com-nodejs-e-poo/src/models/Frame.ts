import { model as createModel, Schema } from 'mongoose';
import IFrame from '../interfaces/Frame';
import MongoModel from './MongoModel';

const frameSchema = new Schema<IFrame>({
  material: String,
  color: String,
});

class Frame extends MongoModel<IFrame> {
  constructor(model = createModel('Frame', frameSchema)) {
    super(model);
  }
}

export default Frame;
