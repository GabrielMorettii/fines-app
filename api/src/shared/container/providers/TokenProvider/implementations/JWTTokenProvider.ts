import { sign } from "jsonwebtoken";
import { ITokenProvider } from "../ITokenProvider";

export class JWTTokenProvider implements ITokenProvider {
  sign(data: any, secret: string, options: Record<string, string>): string {
    return sign(data, secret, options);
  }
}
