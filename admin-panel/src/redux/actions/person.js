import request from '../../tools/request'

export function setPersons (payload) {
  return {
    type: 'PERSONS',
    payload
  }
}

export function setPerson (payload) {
  return {
    type: 'PERSON',
    payload
  }
}

export function getPersons () {
  return (dispatch, getState) => {
    if (!getState().persons.length) {
      request('/users').then(({ data }) => dispatch(setPersons(data)))
    }
  }
}

export const getPerson = id => dispatch =>
  request(`/users/${id}`).then(({ data }) => dispatch(setPerson(data)))
