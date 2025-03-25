export interface uploadDocumentTypes {
  IsSuccess: boolean;
  Message: string;
  Data: Data;
  TotalCount: number;
}

export interface Data {
  Id: number;
  DateUploaded: string;
  CheckInDocId: number;
  InvalidReason: string;
  ObjSysMediaFile: ObjSysMediaFile;
}

export interface ObjSysMediaFile {
  Id: number;
  UniqueFileName: string;
  FlgCoverPhoto: boolean;
  AWSS3FilePath: string;
  AWSThumbNailRelativePath: string;
  DisplayOrder: number;
}

export interface itemListTypes {
  Description: string;
  DocName: string;
  DocType: string;
  FlgMendatory: boolean;
  Id: number;
}
