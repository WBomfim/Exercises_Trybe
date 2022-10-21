import IService from '../interfaces/Service';
import IFrame, { FrameZodSchema } from '../interfaces/Frame';
import IModel from '../interfaces/Model';
import { ErrorTypes } from '../errors/catalog';

class FrameService implements IService<IFrame> {
  private _frame:IModel<IFrame>;
  
  constructor(model:IModel<IFrame>) {
    this._frame = model;
  }

  public async create(obj:unknown):Promise<IFrame> {
    const parsed = FrameZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }
    return this._frame.create(parsed.data);
  }

  public async readOne(_id:string):Promise<IFrame> {
    const frame = await this._frame.readOne(_id);
    if (!frame) throw new Error(ErrorTypes.EntityNotFound);
    return frame;
  }

  public async readAll(): Promise<IFrame[]> {
    return this._frame.readAll();
  }
}

export default FrameService;
