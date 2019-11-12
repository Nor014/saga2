const initState = {
  details: {},
  loading: false,
  error: null
}

export default function detailsReducer(state = initState, action) {
  if (action.type === 'GET_DETAILS') {
    return { ...state, loading: true }
  }

  if (action.type === 'SET_DETAILS') {
    return { ...state, loading: false, error: null, details: action.payload }
  }

  if (action.type === 'SET_DETAILS_ERROR') {
    return { ...state, loading: false, error: action.payload, details: {} }
  }
  
  return state
}