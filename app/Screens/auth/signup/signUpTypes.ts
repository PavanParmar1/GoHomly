export interface signUpType {
  IsSuccess: boolean;
  Message: string;
  TotalCount: number;
  Data: {
    Id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    LoginId: string;
    PhoneNumber: string;
    Address: string;
    FlgVerified?: boolean | undefined;
    ValidationType: string;
    Token: {
      AccessToken: string;
      Expiration: string;
      RefreshToken: string;
    };
  };
}
