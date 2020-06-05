import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

const apiCall = ({
  ctrl,
  login,
  password,
  service,
	method,
	data
}) => {
  const call = uuidv4()
  const passMd5 = crypto.createHash('md5').update(password).digest("hex")
  const passToSend = crypto.createHash('md5').update(passMd5+call).digest("hex")
  console.log('mdhash:',passToSend)
  const url = `https://api.profisms.cz/index.php?CTRL=test&_login=${login}&_service=${service}&_password=${passToSend}&_call=${call}`
  try {
    const res = fetch(url, {
      method,
      body: JSON.stringify(data)
    })
    console.log('res',res.status);
    return res
  } catch(e) {
    console.log('res',e)
  }
}

export default apiCall