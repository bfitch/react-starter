function login(input, state, output, {oauthd}) {
  oauthd.initialize('Eg0kHloT3jsrLv7bAxR_hV7FGF0');
  oauthd.setOAuthdURL('http://localhost:6284');
  oauthd.redirect('snowflake', '/oauthd_callback');
}

function getAccessToken(input, state, output, {oauthd}) {
  oauthd.callback('snowflake')
    .done((response) => {
      output.success({accessToken: response.access_token});
    })
    .fail((error) => {
      output.error({error: error.toString()});
    });
}

function setAjaxBearerToken(input, state, output, services) {
  const token = services.localStorage.getItem('accessToken');
  services.cachejax.setAuthorization(token);
}

function setAccessToken(input, state, output, {localStorage}) {
  let token = input.accessToken;

  state.set('accessToken', token);
  localStorage.setItem('accessToken', token);
  output({accessToken: token});
}

function getUserData(input, state, output, {cachejax}) {
  cachejax.get('currentUser')
    .then((response) => {
      output.success({currentUser: response.data});
    })
    .catch((error) => {
      output.error({error: error.toString()});
    });
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

function verifyToken(input, state, output, {cachejax}) {
  cachejax.get(`http://snowflake.dev/api/v1/verify?access_token=${input.accessToken}`)
    .then((response) => {
      output.tokenValid();
    })
    .catch((response) => {
      if (response.status === 403) {
        output.tokenInvalid();
      } else {
        output.error(response.data);
      }
    })
}
verifyToken.outputs = ['tokenInvalid', 'tokenValid'];

export {
  login,
  verifyToken,
  loadAccessToken,
  setAccessToken,
  getUserData,
  getAccessToken,
  setAjaxBearerToken
};
