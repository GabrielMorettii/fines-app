import {hash, compare} from 'bcrypt'
import { IHashProvider } from "../IHashProvider";

export class BcrypyHashProvider implements IHashProvider {
  hash(key: string, salt: number): Promise<string> {
    return hash(key, salt);
  }
  
  compare(key: string, value: string): Promise<boolean> {
    return compare(key, value)
  }

} 