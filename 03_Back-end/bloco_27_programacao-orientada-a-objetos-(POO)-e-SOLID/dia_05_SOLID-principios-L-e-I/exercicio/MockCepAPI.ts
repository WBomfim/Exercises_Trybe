import CepAPI from './CepAPI';

export default class MockCepAPI implements CepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O mock endereço para o "CEP:${cep}, n°:${number}" é "mock endereço"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O mock CEP para: "${address}, n°: ${number}" é "mock CEP"`;
  }
}
