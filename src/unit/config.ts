class Config {
  public static get wkfb(): string {
    const code: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return `----WebKitFormBoundary${new Array(16)
      .fill('')
      .map(
        (): string => code.at(this.getRandomNumber(0, code.length)) as string
      )
      .join('')}`;
  }

  public static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public static parseCookie(cookie: string, key: string): string {
    for (let item of cookie.split(';')) {
      const value: Array<string> = item.split('=');
      if ((value.at(0) as string).replaceAll(' ', '') === key) {
        return value.at(1) as string;
      }
    }
    return key;
  }

  public static generateHeaders(cookie: string): Headers {
    const headers: Headers = new Headers([
      ['Origin', 'https://live.bilibili.com'],
      [
        'User-Agent',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0'
      ]
    ]);
    headers.set('Content-Type', `multipart/form-data; boundary=${Config.wkfb}`);
    headers.set('Cookie', cookie);
    return headers;
  }
}

export default Config;
