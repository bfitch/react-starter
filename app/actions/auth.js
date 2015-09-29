async function login(input, state, output, {hello}) {
  hello.init({
    google: '156701363240-8ah4jrt0bek2mt7a1dpqtih1rdo0gnn3.apps.googleusercontent.com'
  });

  try {
    let response = await hello.login('google');
    output.success({accessToken: response.authResponse.access_token});

  } catch (error) {
    output.error(error);
  }
}

function setAccessToken(input, state, output, {localStorage}) {
  let token = input.accessToken;

  state.set('accessToken', token);
  localStorage.setItem('accessToken', token);
  output({accessToken: token});
}

async function getUserData(input, state, output, {hello}) {
  try {
    let userData = await hello('google').api('me');
    output.success({userData: userData});

  } catch (error) {
    output.error(error);
  }
}

function loadAccessToken(input, state, output, {localStorage}) {
  let token = localStorage.getItem('accessToken');

  if (token) {
    output.tokenFound({accessToken: token});
  } else {
    output.tokenNotFound();
  }
}
loadAccessToken.outputs = ['tokenFound', 'tokenNotFound'];

async function verifyToken(input, state, output, {ajax}) {
  try {
    let response = await ajax.get(
      `https://www.googleapis.com/oauth2/v1/tokeninfo` +
      `?access_token=${input.accessToken}`
    );

    if (response.status === 200) {
      output.tokenValid();
    }
  } catch (error) {
    if (error.status === 400) {
      output.tokenInvalid();
    } else {
      output.error(error);
    }
  }
}
verifyToken.outputs = ['tokenInvalid', 'tokenValid'];

export {
  login,
  verifyToken,
  loadAccessToken,
  setAccessToken,
  getUserData
};
