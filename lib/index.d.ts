import { EventEmitter } from 'node:events';
import { IConfig, IResponse } from './interface/IGlobal';
declare class BiliSender extends EventEmitter {
    private static CLIENT;
    private readonly roomID;
    private readonly headers;
    private readonly csrf;
    constructor(roomID: number, config: IConfig);
    addListener(callback: (response: IResponse) => void): this;
    send(message: string): Promise<boolean>;
}
export default BiliSender;
export type { IConfig, IResponse };
//# sourceMappingURL=index.d.ts.map