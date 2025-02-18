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
  import BiliSender from 'bili-sender';
      
  const biliSender: BiliSender = new BiliSender(9329583, {
    Cookie: 'xxxxxxxxxxxxxxxxxxxxxxx'
  });
  biliSender.addListener(({ code, message }) => {
    console.info(code, message)
  });
  
  biliSender.send('Hello BiliBili');
```