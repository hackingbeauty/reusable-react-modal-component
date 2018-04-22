import constants from 'core/types'

export function openModal(obj) {
  return {
    type: constants.OPEN_MODAL,
    modalKey: obj.modalKey,
    params: obj.params
  }
}

export function closeModal(obj) {
  return {
    type: constants.CLOSE_MODAL,
    modalKey: obj.modalKey
  }
}
