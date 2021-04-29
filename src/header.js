import { codefactory } from './codefactory';

const links = {
  Home: 'home'
};

const header = () => {
  // codefactory( _type, {_attr}, _content, _parent_id )
  codefactory('header', { class: 'text-gray-600 body-font', id: 'header' }, '', 'content');
  codefactory('div', { class: 'container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center', id: 'headercontainer' }, '', 'header');
  codefactory('a', { class: 'title-font cursor-pointer font-medium items-center text-gray-900', href: '#' }, 'To-Dos', 'headercontainer');
  codefactory('nav', { class: 'md:ml-auto flex flex-wrap items-center text-base justify-center', id: 'headerlinks' }, '', 'headercontainer');
  Object.keys(links).forEach((l) => codefactory('a', { class: 'mr-5 hover:text-gray-900 cursor-pointer', id: l }, l, 'headercontainer').addEventListener('click', links[l]));
};

export default header;