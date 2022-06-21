class Students {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[] = Array();
  private _worksGrades: number[] = Array();

  constructor(enrollment: string, name: string, exames: number[], works: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.examsGrades = exames;
    this.worksGrades = works;
  };

  get enrollment(): string {
    return this._enrollment;
  }
  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }
  set examsGrades(value: number[]) {
    if(value.length !== 4) {
      throw new Error('Precisa ter pelo menos 4 notas de prova.')
    }
    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }
  set worksGrades(value: number[]) {
    if(value.length !== 2) {
      throw new Error('Precisa ter pelo menos 2 notas de trabalho.')
    }
    this._worksGrades = value;
  }
}

const stundent1 = new Students('1234', 'Alex', [5, 6, 7, 8], [8, 10]);
console.log(stundent1);

const stundent2 = new Students('1234', 'Sandra', [7, 8, 10, 9], [9, 6]);
console.log(stundent2);
