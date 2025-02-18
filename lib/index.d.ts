import EventEmitter from 'node:events';
import { IConfig, Response } from './interface/IGlobal';
declare class BiliSender extends EventEmitter {
    private static CLIENT;
    private readonly roomID;
    private readonly headers;
    private readonly csrf;
    constructor(roomID: number, config: IConfig);
    addListener(callback: (response: Response) => void): this;
    send(message: string): Promise<boolean>;
}
export default BiliSender;
export type { IConfig, Response };
//# sourceMappingURL=index.d.ts.map