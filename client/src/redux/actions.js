import axios from 'axios';

export const FETCH_IMAGES = 'FETCH_IMAGES';
export const ADD_IMAGE = 'ADD_IMAGE';
export const GET_IMAGE_BY_ID = 'GET_IMAGE_BY_ID';

const url = 'http://localhost:3000/api/';

// Action creators
export const fetchImages = () => {
    return (dispatch) => {
        axios.get(`${url}/posts`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then((response) => {
                dispatch({
                    type: FETCH_IMAGES,
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
            });
    };
};

export const addImage = (imageData) => {
    return (dispatch) => {
        axios.post(`${url}/post`, imageData, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
            .then((response) => {
                dispatch({
                    type: ADD_IMAGE,
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.error('Error adding image:', error);
            });
    };
};

export const getImageById = (id) => {
    return (dispatch) => {
        axios.get(`${url}/posts/${id}`)
            .then((response) => {
                dispatch({
                    type: GET_IMAGE_BY_ID,
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.error('Error fetching image by id:', error);
            });
    };
}
