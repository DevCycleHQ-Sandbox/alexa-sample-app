const DVC = require('@devcycle/nodejs-server-sdk');

export const hello = async (event, context) => {
  const dvcClient = await DVC.initialize('server-d7c0692e-f288-4f85-8533-35d0c49ed137').onClientInitialized();
  const variable = dvcClient.variable({ user_id: 'nik' }, 'alexa', false);
  const message = variable.value ? 'awwwww yeah' : 'hells naw';
  return {
    statusCode: 200,
    body: JSON.stringify({
      message
    }),
  };
};
