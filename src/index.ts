import { error } from 'node:console';
import { EventEmitter } from 'node:events';
import {
  AxiosRequestHeaders,
  AxiosInstance,
  AxiosResponse,
  create
} from 'axios';

import EncodeDataBody from './helper/EncodeDataBody';
import { IConfig, IResponse } from './interface/IGlobal';
import Config from './unit/config';

class BiliSender extends EventEmitter {
  private static CLIENT: AxiosInstance = create({
    baseURL: 'https://api.live.bilibili.com',
    method: 'POST'
  });

  private readonly roomID: number;
  private readonly headers: Headers;
  private readonly csrf: string;

  public constructor(roomID: number, config: IConfig) {
    super();
    this.roomID = roomID;
    this.headers = Config.generateHeaders(config.Cookie);
    this.csrf = Config.parseCookie(
      this.headers.get('Cookie') as string,
      'bili_jct'
    );
  }

  // @ts-ignore
  public addListener(callback: (response: IResponse) => void): this {
    return super.addListener('callback', callback);
  }

  public async send(message: string): Promise<boolean> {
    try {
      const {
        data: { code, message: responseMessage }
      }: AxiosResponse = await BiliSender.CLIENT({
        url: '/msg/send',
        headers: this.headers as unknown as AxiosRequestHeaders,
        data: EncodeDataBody({
          wkfb: this.headers
            .get('Content-Type')
            ?.split('boundary=')
            .at(1) as string,
          roomId: this.roomID,
          message,
          csrf: this.csrf,
          csrf_token: this.csrf
        })
      });
      super.emit('callback', {
        code,
        message: responseMessage
      });
      return true;
    } catch (err: any) {
      error(new Error(err));
      return false;
    }
  }

  public static createTable(
    roomID: Array<number>,
    config: IConfig
  ): Array<BiliSender> {
    return roomID.map(
      (room: number): BiliSender => new BiliSender(room, config)
    );
  }
}

export default BiliSender;
export type { IConfig, IResponse };
