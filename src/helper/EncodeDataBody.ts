import { IEncodeDataBody } from '../interface/IEncodeDataBody';

function EncodeDataBody({
  wkfb,
  roomId,
  message,
  csrf,
  csrf_token
}: IEncodeDataBody): string {
  return `
--${wkfb}
Content-Disposition: form-data; name="bubble"

5
--${wkfb}
Content-Disposition: form-data; name="msg"

${message}
--${wkfb}
Content-Disposition: form-data; name="color"

5816798
--${wkfb}
Content-Disposition: form-data; name="mode"

1
--${wkfb}
Content-Disposition: form-data; name="room_type"

0
--${wkfb}
Content-Disposition: form-data; name="jumpfrom"

71002
--${wkfb}
Content-Disposition: form-data; name="reply_mid"

0
--${wkfb}
Content-Disposition: form-data; name="reply_attr"

0
--${wkfb}
Content-Disposition: form-data; name="replay_dmid"


--${wkfb}
Content-Disposition: form-data; name="statistics"

{"appId":100,"platform":5}
--${wkfb}
Content-Disposition: form-data; name="reply_type"

0
--${wkfb}
Content-Disposition: form-data; name="reply_uname"


--${wkfb}
Content-Disposition: form-data; name="isCnYRoom"

false
--${wkfb}
Content-Disposition: form-data; name="fontsize"

25
--${wkfb}
Content-Disposition: form-data; name="rnd"

${new Date().getTime()}
--${wkfb}
Content-Disposition: form-data; name="roomid"

${roomId}
--${wkfb}
Content-Disposition: form-data; name="csrf"

${csrf}
--${wkfb}
Content-Disposition: form-data; name="csrf_token"

${csrf_token}
--${wkfb}--`;
}

export default EncodeDataBody;
