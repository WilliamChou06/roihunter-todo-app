const defaultAuthState = [];

const authReducer = (state = defaultAuthState, action) => {
  switch (action.type) {
    case 'GET_SESSION_ID':
      return state;
    case 'ALTER_SESSION':
      return state;
    case 'DELETE_SESSION':
      return state;
    default:
      return state;
  }
};

export default authReducer;
