import FooCepAPI from './FooCepAPI';

class CepService {
  private readonly cepApi: FooCepAPI;

  constructor() {
    this.cepApi = new FooCepAPI();
  }

  addressByCep(cep: string, num: number): Promise<string> {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number): Promise<string> {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
