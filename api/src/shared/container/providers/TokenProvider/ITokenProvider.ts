export interface ITokenProvider {
  sign(
    data: any,
    secret: string,
    options: Record<string, string>
  ): string;
}
