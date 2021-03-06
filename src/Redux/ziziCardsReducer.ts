import { Dispatch } from "redux"
import { localStorageApi } from "../components/api/profileApi"
import { AppStateType } from "./store"
import { tableCardsApi } from "../components/api/tableCardsApi"
import { setTokenSuccess } from "./profileReducer"


const SET_CARDS = 'ziziCardsReducer/SET_CARDS'
const SET_CARD = 'ziziCardsReducer/SET_CARD'
const SET_ERROR = 'ziziCardsReducer/SET_ERROR'

export type cardType = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  rating: number
  shots: number
  type: string
  created: string
  updated: string
  __v: 0
  _id: string
}


export type cardsType = Array<cardType>


const initialState = {
  cards: [] as cardsType,
  error: '',
  pageCount: 0,
  page: 0,
  token: '',
  cardsTotalCount: 0,
  maxGrade: 0,
  minGrade: 0,
  card: {
    answer: '',
    question: '',
    cardsPack_id: '',
    grade: 0,
    rating: 0,
    shots: 0,
    type: '',
    created: '',
    updated: '',
    __v: 0,
    _id: ''
  }
};

export type InitialStateType = typeof initialState;

export const ziziCardsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: action.cards
      }
    case SET_CARD:
      return {
        ...state,
        card: action.card
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      }
    default: return state
  }
}

type ActionType = setCardsActionType | setCardActionType | setErrorActionType

type setCardsActionType = {
  type: typeof SET_CARDS
  cards: cardsType
}

type setCardActionType = {
  type: typeof SET_CARD
  card: cardType
}

type setErrorActionType = {
  type: typeof SET_ERROR
  error: string
  isAuth: boolean
}


export const setTableSuccess = (cards: cardsType): setCardsActionType => ({ type: SET_CARDS, cards: cards })
export const setNewCard = (card: cardType): setCardActionType => ({ type: SET_CARD, card: card })
const setError = (error: string): setErrorActionType => ({ type: SET_ERROR, error: error, isAuth: false })


export const setTableData = (cardsPack_id: string) => async (dispatch: Dispatch, getState: () => AppStateType) => {
  try {
    let token = localStorageApi.getToken() || ''
    let response = await tableCardsApi.getCards(token, cardsPack_id)
    dispatch(setTableSuccess(response.data.cards))
    localStorageApi.setToken(response.data.token)
  } catch (error) {
    if (error.response) {
      dispatch(setError(error.response.data.error))
    } else {
      dispatch(setError('Some ERROR'))
    }
  }
}

export const setNewCardData = (cardsPack_id: string) => async (dispatch: Dispatch, getState: () => AppStateType) => {

  try {
    let token = localStorageApi.getToken() || ''
    let response = await tableCardsApi.setNewCard({ cardsPack_id: cardsPack_id, type: 'ziziCards' }, token);
    if (response.data.success) {
      let cardsResponse = await tableCardsApi.getCards(response.data.token, cardsPack_id)
      dispatch(setTableSuccess(cardsResponse.data.cards))
      dispatch(setTokenSuccess(cardsResponse.data.token))
      localStorageApi.setToken(cardsResponse.data.token)
    } else {
      dispatch(setError('Some ERROR'))
    }

  } catch (error) {
    if (error.response) {
      dispatch(setError(error.response.data.error))
    } else {
      dispatch(setError('Some ERROR'))
    }
  }
}

export const deleteCard = (id: string, cardsPack_id: string) => async (dispatch: Dispatch) => {
  try {
    let token = localStorageApi.getToken() || ''
    let response = await tableCardsApi.deleteCard(token, id)
    if (response.data.success) {
      let cardsResponse = await tableCardsApi.getCards(response.data.token, cardsPack_id)
      dispatch(setTableSuccess(cardsResponse.data.cards))
      dispatch(setTokenSuccess(cardsResponse.data.token))
      localStorageApi.setToken(cardsResponse.data.token)
    } else {
      dispatch(setError('Some ERROR'))
    }

  } catch (error) {
    if (error.response) {
      dispatch(setError(error.response.data.error))
    } else {
      dispatch(setError('Some ERROR'))
    }
  }
}

export const setErrorMessage = (error: string) => (dispatch: Dispatch) => {
  dispatch(setError(error))
}
