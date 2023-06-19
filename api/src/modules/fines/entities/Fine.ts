export class Fine {
  public readonly id?: number;
  public license_plate!: string;
  public description!: string;
  public value!: number;
  public service!: string;
  public state!: string;
  public infraction_date!: Date;

  constructor(props: Fine){
    Object.assign(this, props);
  }
}