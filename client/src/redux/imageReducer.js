import { FETCH_IMAGES, ADD_IMAGE, GET_IMAGE_BY_ID } from './imageActions';

const initialState = {
  images: [],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, action.payload],
      };
    case GET_IMAGE_BY_ID:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
