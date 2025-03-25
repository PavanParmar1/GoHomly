export interface loginType {
  IsSuccess?: boolean;
  Message: string;
  Data?: {
    Id?: number;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    FlgVerified?: boolean | undefined;
    ValidationType?: string;
    Token?: {
      AccessToken?: string;
      Expiration?: string;
      RefreshToken?: string;
    };
    PhoneNumber?: string;
  };
  TotalCount?: number;
}
