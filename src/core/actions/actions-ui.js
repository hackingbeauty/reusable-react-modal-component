import constants from 'core/types';

/**
 * openNav - Open the side nav
 */
export function openNav() {
  return {
    type: constants.OPEN_NAV
  };
}

/**
 * closeNav - Close the side nav
 */
export function closeNav() {
  return {
    type: constants.CLOSE_NAV
  };
}