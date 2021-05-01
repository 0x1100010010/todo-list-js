import { codefactory } from './codefactory';

export const status = () => {
  codefactory('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'status-flex-container-size' }, '', 'body-flex-container');
  codefactory('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'status-flex-container-style' }, '', 'status-flex-container-size');
  codefactory('div', { class: 'w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 self-center', id: 'status-flex-container-content' }, '', 'status-flex-container-style');
  codefactory('i', { class: "fas fa-check-square" }, '', 'status-flex-container-content');
  codefactory('h2', { class: 'text-lg text-gray-900 font-medium title-font mb-2' }, 'Shooting Stars', 'status-flex-container-style');
  codefactory('h2', { class: 'leading-relaxed text-base' }, 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.', 'status-flex-container-style');
}

// export default project;
