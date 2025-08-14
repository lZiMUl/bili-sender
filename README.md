# BiliSender

## It is used to automatically send barrages to the Bilibili live broadcast room

---

# Install
```bash
  npm i --save bili-sender
```

---

### Usage 1 
```ts
  import BiliSender, { IConfig, IResponse } from 'bili-sender';

  const options: IConfig = {
    Cookie: 'xxxxxxxxxxxxxxxxxxxxxxx'
  };
  
  const biliSender: BiliSender = new BiliSender(9329583, options);
  
  biliSender.addListener(({ code, message }: IResponse): void => {
    console.info(code, message)
  });
  
  biliSender.send('Hello BiliBili').then((status: boolean): void => {
    if (status) console.info('done!!')
    else console.warn('sent error')
  });
```

### Usage 2
```ts
  import BiliSender, { IConfig, IResponse } from 'bili-sender';

  const options: IConfig = {
    Cookie: 'xxxxxxxxxxxxxxxxxxxxxxx'
  };
  
  const biliSenderTable: Array<BiliSender> = BiliSender.createTable([1,2,3], options);
  
  biliSenderTable.forEach(async (client: BiliSender): Promise<void> => {
    client.addListener(({ code, message }: IResponse): void => {
      console.info(code, message)
    });
  
    try {
      await client.send('Hello BiliBili');
      console.info('done!!');
    } catch (e) {
      console.warn('sent error');
    }
  })
```