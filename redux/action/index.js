/* import { createAction } from 'redux-actions'; */
/* import axios from 'axios'; */

/* export const postMessage = (userNameText, postMessageLink) => async (dispatch) => {
  dispatch(postMessageRequest());
  try {
    await axios.post(postMessageLink, {
      data: {
        attributes: {
          message: userNameText.text,
          username: userNameText.userName,
        },
      },
    });
    dispatch(postMessageSuccess(userNameText));
  } catch (e) {
    dispatch(postMessageFailure());
  }
};
 */