console.log('empty');


export class Test {
  private test: string;

  constructor(test: string) {
    this.test = test;
  }

  public get_string(): string {
    return this.test +'asdas';
  }
}
