import CepAPI from './CepAPI';

class CepService {
  constructor(
    private readonly cepApi: CepAPI,
  ) {}

  addressByCep(cep: string, num: number): Promise<string> {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number): Promise<string> {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
