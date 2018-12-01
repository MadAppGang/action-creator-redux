# Redux action creator

It is an unofficial utility function that is designed to reduce verbosity of redux action creators.

### Installation
```bash
npm i --save action-creator-redux
```
```javascript
import actionCreator from 'action-creator-redux';
```

### Example
Here we have a common redux action that fetches users.
```javascript
const types = {
  FETCH_ATTEMPT: 'FETCH_ATTEMPT',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILURE: 'FETCH_FAILURE',
};

const fetchAttempt = () => ({
  type: types.FETCH_ATTEMPT,
});

const fetchSuccess = users => ({
  type: types.FETCH_SUCCESS,
  payload: users,
});

const fetchFailure = err => ({
  type: types.FETCH_FAILURE,
  payload: err,
});

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchAttempt());

  try {
    ...
    dispatch(fetchSuccess(users));
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};
```

Actions creators look pretty verbose, and you may have a lot of those in each file. Here's what we can do.

```javascript
import actionCreator from 'action-creator-redux';

...

const fetchAttempt = actionCreator(types.FETCH_ATTEMPT);
const fetchSuccess = actionCreator(types.FETCH_SUCCESS);
const fetchFailure = actionCreator(types.FETCH_FAILURE);

...

```

The rest remails the same. This approach implies that you adhere to unified structure of redux action. It means that all the data the action holds is put inside the **payload** property.
```javascript
const fetchSuccess = actionCreator(types.FETCH_SUCCESS);
fetchSuccess('This is payload');
// { type: 'FETCH_SUCCESS', payload: 'This is payload' }
```

There is nothing more to it.

### LICENSE
This project is licensed under the MIT License - see the LICENSE file for details.



