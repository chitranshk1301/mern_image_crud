import { FETCH_IMAGES, ADD_IMAGE, GET_IMAGE_BY_ID } from './actions';

const initialState = {
  images: [],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.payload,
        error: action.payload.error,
      };
    case ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, action.payload],
        error: action.payload.error,
      };
    case GET_IMAGE_BY_ID:
      return {
        ...state,
        images: action.payload,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default imageReducer;
