import Router from 'cerebral-router';
import {verifyToken, loadAccessToken, getUserData, getAccessToken, setAjaxBearerToken} from '../actions/auth';
import {setCurrentUser, setError} from '../actions/state';

export default [
  loadAccessToken, {
    tokenFound: [
      [verifyToken, {
        tokenInvalid: [Router.redirect('/login')],
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
    tokenNotFound: [Router.redirect('/login')]
  }
];
