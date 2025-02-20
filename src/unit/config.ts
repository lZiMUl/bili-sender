class Config {
  private static get wkfb(): string {
    const code: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return `----WebKitFormBoundary${new Array(16)
      .fill('')
      .map(
        (): string => code.at(this.getRandomNumber(0, code.length)) as string
      )
      .join('')}`;
  }

  public static parseCookie(cookie: string, key: string): string {
    for (let item of cookie.split(';')) {
      const data: Array<string> = item.split('=');
      const [cookieKey, cookieValue]: [string, string] = [
        (data.at(0) as string).replaceAll(' ', ''),
        data.at(1) as string
      ];
      if (cookieKey === key) {
        return cookieValue;
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

  private static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export default Config;
