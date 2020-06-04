
import crypto from 'crypto';

const apiCall = async ({
  ctrl,
  login,
  password,
  service,
	method,
	data
}) => {
  const passToSend = crypto.createHash('md5').update(password).digest("hex")
  console.log('mdhash:',passToSend)
  const call = 'unic'
  const url = `https://api.profisms.cz/index.php?CTRL=test
    &_login=${login}
    &_service=${service}
    &_password=${passToSend}
    &_call=${call}`
	const response = await fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	});
	console.log('res',response)
  return response.json()
}

export default apiCall