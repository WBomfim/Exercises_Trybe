import Person from "./Person";
import Enrollable from "./Enrollable";

export default class Student extends Person implements Enrollable {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.')
    }

    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('O aluno não pode ter mais que 4 notas em provas.')
    }

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('O aluno não pode ter mais que 2 notas em trabalhos.')
    }

    this._worksGrades = value;
  }

  sumGrades(): number {
    const examsSum = this.examsGrades.reduce((acc, cur) => acc + cur);
    const worksSum = this.worksGrades.reduce((acc, cur) => acc + cur);

    return examsSum + worksSum;
  }

  sumAverageGrade(): number {
    const sum = this.sumGrades();
    const div = this.examsGrades.length + this.worksGrades.length;

    return Math.round(sum / div);
  }

  
  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}
