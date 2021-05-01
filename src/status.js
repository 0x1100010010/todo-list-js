import { codefactory } from './codefactory';

export const status = () => {
  codefactory('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'status-flex-container-size' }, '', 'body-flex-container');
  codefactory('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'status-flex-container' }, '', 'status-flex-container-size');
  codefactory('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Status', 'status-flex-container');
  codefactory('h2', { class: 'text-lg text-gray-900 font-medium title-font mb-2' }, 'Shooting Stars', 'status-flex-container');
  codefactory('h2', { class: 'leading-relaxed text-base' }, 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.', 'status-flex-container');
}

// export default project;
