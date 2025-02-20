# BiliSender

## It is used to automatically send barrages to the Bilibili live broadcast room

---

# Install
```bash
  npm i --save bili-sender
```

---

### Usage
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