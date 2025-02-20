interface IEncodeDataBody {
  wkfb: string;
  roomId: number;
  message: string;
  csrf: string;
  csrf_token: string;
}

export type { IEncodeDataBody };
