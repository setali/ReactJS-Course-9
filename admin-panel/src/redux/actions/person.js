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

export const getPerson = id => (dispatch, getState) => {
  const { persons } = getState()

  if (persons.length) {
    const person = persons.find(el => el.id === +id)
    dispatch(setPerson(person))
  } else {
    request(`/users/${id}`).then(({ data }) => dispatch(setPerson(data)))
  }
}

export const updatePerson = data => (dispatch, getState) => {
  const { persons } = getState()
  const newPersons = persons.map(person =>
    person.id !== data.id ? person : data
  )
  dispatch(setPersons(newPersons))
  dispatch(setPerson({}))
}

export const removePerson = id => (dispatch, getState) => {
  const { persons } = getState()
  const newPersons = persons.filter(person => person.id !== id)
  dispatch(setPersons(newPersons))
}
