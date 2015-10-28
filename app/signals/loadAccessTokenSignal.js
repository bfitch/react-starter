import Router from 'cerebral-router';
import {verifyToken, loadAccessToken, getUserData, getAccessToken, setAjaxBearerToken} from '../actions/auth';
import {setCurrentUser, setError} from '../actions/state';

function redirect(url) {
  return function(input, state, output, services) {
    return services.router.redirect(url, {
      replace: false
    });
  }
}

export default [
  loadAccessToken, {
    tokenFound: [
      [verifyToken, {
        tokenInvalid: [redirect('/login')],
        tokenValid: [
          setAjaxBearerToken,
          [getUserData, {
            success: [setCurrentUser],
            error: [setError]
          }]
        ],
        error: [setError]
      }]
    ],
    tokenNotFound: [redirect('/login')]
  }
];
