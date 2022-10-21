interface IModel<T> {
  create(obj:T):Promise<T>,
  readOne(_id:string):Promise<T | null>,
  readAll():Promise<T[]>,
}

export default IModel;
