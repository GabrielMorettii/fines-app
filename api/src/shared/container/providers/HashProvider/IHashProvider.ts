export interface IHashProvider {
  hash(key: string, salt: number): Promise<string>;
  compare(key: string, value: string): Promise<boolean>;
}