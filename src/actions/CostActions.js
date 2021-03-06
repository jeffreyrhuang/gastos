import firebase from 'firebase';
import {
  COST_CREATE,
  COST_EDIT_LOAD,
  COST_EDIT_CANCEL,
  COST_EDIT_SUCCESS,
  COSTS_FETCH_SUCCESS,
  UPDATE_COST,
  UPDATE_COST_FAILURE,
  UPDATE_CATEGORY,
  UPDATE_SUBCATEGORY,
  UPDATE_DESCRIPTION,
  UPDATE_COST_MONTH
} from './types';

export const updateCost = (amount) => {
  return (dispatch) => {
    if (isNaN(amount)) {
      dispatch({ type: UPDATE_COST_FAILURE, payload: amount })
    } else {
      dispatch({ type: UPDATE_COST, payload: amount })
    }
  }
}

export const updateCategory = (text) => {
  return {
    type: UPDATE_CATEGORY,
    payload: text
  }
}

export const updateSubcategory = (text) => {
  return {
    type: UPDATE_SUBCATEGORY,
    payload: text
  }
}

export const updateDescription = (text) => {
  return {
    type: UPDATE_DESCRIPTION,
    payload: text
  }
}

export const updateCostMonth = (text) => {
  return {
    type: UPDATE_COST_MONTH,
    payload: text
  }
}

export const costCreate = ({ amount, category, subcategory, description, date }) => {
  return (dispatch) => {
    firebase.database().ref(`/${date}/`)
      .push({ amount, category, subcategory, description })
      .then(() => {
        dispatch({ type: COST_CREATE });
      })
  }
}

export const costsFetch = ({ selectedMonth }) => {
  return (dispatch) => {
    firebase.database().ref(`/${selectedMonth}/`)
      .on('value', snapshot => {
        dispatch({ type: COSTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  }
}

export const loadCost = ({ amount, category, subcategory, description }) => {
  return (dispatch) => {
    dispatch({
      type: COST_EDIT_LOAD,
      payload: { amount, category, subcategory, description }
    });
  }
};

export const cancelEdit = () => {
  return { type: COST_EDIT_CANCEL };
}

export const costEdit = ({ selectedMonth, amount, category, subcategory, description, uid }) => {
  return(dispatch) => {

    firebase.database().ref(`/${selectedMonth}/${uid}`)
      .set({ amount, category, subcategory, description })
      .then(() => {
        dispatch({ type: COST_EDIT_SUCCESS });
      })
  }
}

export const costDelete = ({ selectedMonth, uid }) => {
  return () => {
    firebase.database().ref(`/${selectedMonth}/${uid}`)
      .remove();
  }
}
