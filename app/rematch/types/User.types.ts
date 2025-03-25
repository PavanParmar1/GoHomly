export interface _User {
  user: {
    email: string;
  };
  email: string;
  id: string;
  uniqueId: string;
  account: {
    name: string;
    username: string;
  };
  language: string;
  sessionExp: number;
  userId: string;
  role: string;
  type: string;
  name: string;
  userImage: {
    fileName: string;
    fileUrl: string;
  };
  idTokenClaims: {
    exp: number;
  };
  stsTokenManager: {
    expirationTime: number;
  };
  fcb: any;
}

export type UserState = {
  user: _User;
};

export interface firestoreUser {
  id: string;
  name: string;
  email: string;
  role: string;
  sessionExp: number;
  userImage: {fileName: string; fileUrl: string};
}
export interface UserObject {
  (): _User;
}

export interface Models {
  userObject: _User;
}
