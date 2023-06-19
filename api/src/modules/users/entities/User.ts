export class User {
  public readonly id?: number;
  public username!: string;
  public password!: string;

  constructor(props: User){
    Object.assign(this, props);
  }
}