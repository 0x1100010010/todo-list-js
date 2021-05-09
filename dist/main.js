/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _codefactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codefactory */ \"./src/codefactory.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status */ \"./src/status.js\");\n\n\n\n\n\nconst body = () => {\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('section', { class: 'text-gray-600 body-font', id: 'body-section' }, '', 'content');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'container px-5 py-24 mx-auto', id: 'body-container' }, '', 'body-section');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'flex flex-wrap -m-4', id: 'body-flex-container' }, '', 'body-container');\n\n  (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)();\n  (0,_todo__WEBPACK_IMPORTED_MODULE_2__.todo)();\n  (0,_status__WEBPACK_IMPORTED_MODULE_3__.status)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (body);\n\n//# sourceURL=webpack://todo-list-js/./src/body.js?");

/***/ }),

/***/ "./src/codefactory.js":
/*!****************************!*\
  !*** ./src/codefactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"codefactory\": () => (/* binding */ codefactory)\n/* harmony export */ });\nconst codefactory = (_type, _attr, _content, _parentId) => {\n  const node = document.createElement(_type);\n  node.innerText = _content;\n  Object.keys(_attr).forEach((attr) => node.setAttribute(attr, _attr[attr]));\n  if (node) {\n    document.getElementById(_parentId).appendChild(node);\n  }\n\n  return node;\n};\n\n//# sourceURL=webpack://todo-list-js/./src/codefactory.js?");

/***/ }),

/***/ "./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\nconst db = () => {\n  const projectData = (name, description, priority, duedate, todos = []) => ({\n    name, description, priority, duedate, todos,\n  });\n\n  const todoData = (name, description) => ({\n    name, description,\n  });\n\n  const load = () => {\n    const defaultData = projectData('Default', 'Default Project', 5, 'duedate', [{ name: 'Default Todo', description: 'Default' }]);\n    const storage = localStorage.getItem('projects');\n\n    try {\n      return storage ? JSON.parse(storage) : db().set('projects', [].concat(defaultData));\n    } catch (ex) {\n      return [].concat(defaultData);\n    }\n  };\n\n  let projects = load();\n\n  const set = (item, data) => {\n    localStorage.setItem(item, JSON.stringify(data));\n  };\n\n  const get = (item) => localStorage.getItem((item));\n\n  const add = (obj) => {\n    set('projects', (projects.concat(obj)));\n    return get('projects');\n  };\n\n  const parseProject = (e) => {\n    e.preventDefault();\n    const formElements = e.target.elements;\n\n    const newProject = db().projectData(\n      formElements.name.value,\n      formElements.description.value,\n      formElements.priority.value,\n      formElements.duedate.value,\n    );\n    db().set('_project', newProject);\n    projects = load();\n    const exists = Object.keys(projects).some((k) => projects[k].name === newProject.name);\n    (exists) ? (alert('Name already exists, Choose a unique name!')) : (db().add(newProject));\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.helper)().renderProjects();\n  };\n\n  const addToProject = (_todo, i) => {\n    const exists = Object.keys(projects[i].todos).some(\n      (k) => projects[i].todos[k].name === _todo.name,\n    );\n    if (exists) {\n      (alert('Name already exists, Choose a unique name!'));\n    } else {\n      projects[i].todos.push(_todo);\n      db().set('projects', projects);\n    }\n  };\n\n  const parseTodo = (e) => {\n    e.preventDefault();\n    const formElements = e.target.elements;\n\n    const newTodo = db().todoData(\n      formElements.name.value,\n      formElements.description.value,\n    );\n    db().set('_todo', newTodo);\n    const i = (window.projectIndex) ? (window.projectIndex) : 0;\n    db().addToProject(newTodo, i);\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.helper)().renderTodos(i);\n  };\n\n  const dropProject = (e) => {\n    e.preventDefault();\n    let i = (window.projectIndex)\n    projects.splice(i,1)\n    db().set('projects', projects);\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.helper)().renderProjects();\n    document.getElementById('status-flex-container-size').remove();\n  }\n  const dropTodo = (e) => {\n    e.preventDefault();\n    projects[window.projectIndex].todos.splice(window.todoIndex,1)\n    db().set('projects', projects);\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.helper)().renderTodos(window.projectIndex);\n    document.getElementById('status-flex-container-size').remove();\n  }\n\n  return {\n    projects, load, add, set, get, todoData, projectData, addToProject, parseProject, parseTodo, dropProject, dropTodo\n  };\n};\n\n\n//# sourceURL=webpack://todo-list-js/./src/db.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form)\n/* harmony export */ });\n/* harmony import */ var _codefactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codefactory */ \"./src/codefactory.js\");\n\n\nconst form = () => {\n  const project = () => {\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('input', {\n      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'project-name', name: 'name', type: 'text', placeholder: 'Name', required: '',\n    }, '', 'project-form');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('input', {\n      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'project-description', name: 'description', type: 'text', placeholder: 'Description', required: '',\n    }, '', 'project-form');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('input', {\n      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'project-priority', name: 'priority', type: 'number', placeholder: 'Priority', required: '',\n    }, '', 'project-form');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('input', {\n      class: 'shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'project-duedate', name: 'duedate', type: 'text', placeholder: 'Duedate', required: '',\n    }, '', 'project-form');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('button', {\n      class: 'flex items-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'project-submit', name: 'project-submit', type: 'submit', value: 'Send',\n    }, '', 'project-form');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('span', { class: '' }, 'Submit', 'project-submit');\n  };\n\n  const todo = () => {\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('input', {\n      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'todo-name', name: 'name', type: 'text', placeholder: 'Name', required: '',\n    }, '', 'todo-form');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('input', {\n      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'todo-description', name: 'description', type: 'text', placeholder: 'Description', required: '',\n    }, '', 'todo-form');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('button', {\n      class: 'flex items-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'todo-submit', name: 'todo-submit', type: 'submit', value: 'Send',\n    }, '', 'todo-form');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('span', { class: '' }, 'Submit', 'todo-submit');\n  };\n\n  return {\n    project, todo,\n  };\n};\n\n//# sourceURL=webpack://todo-list-js/./src/form.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _codefactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codefactory */ \"./src/codefactory.js\");\n\n\nconst links = {\n  Home: 'home',\n};\n\nconst header = () => {\n  // codefactory( _type, {_attr}, _content, _parent_id )\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('header', { class: 'text-gray-600 body-font', id: 'header' }, '', 'content');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center', id: 'headercontainer' }, '', 'header');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('a', { class: 'title-font cursor-pointer font-medium items-center text-gray-900', href: '#' }, 'To-Dos', 'headercontainer');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('nav', { class: 'md:ml-auto flex flex-wrap items-center text-base justify-center', id: 'headerlinks' }, '', 'headercontainer');\n  Object.keys(links).forEach((l) => (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('a', { class: 'mr-5 hover:text-gray-900 cursor-pointer', id: l }, l, 'headercontainer'));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://todo-list-js/./src/header.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"helper\": () => (/* binding */ helper)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"./src/db.js\");\n/* harmony import */ var _codefactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codefactory */ \"./src/codefactory.js\");\n/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status */ \"./src/status.js\");\n\n\n\n\nconst helper = () => {\n  const renderTodos = (i) => {\n    const projects = (0,_db__WEBPACK_IMPORTED_MODULE_0__.db)().load();\n    const { todos } = projects[i];\n    if (document.getElementById('todo-names') != null) {\n      document.getElementById('todo-names').remove();\n    }\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_1__.codefactory)('div', { class: 'border border-gray-200 my-3 p-5 rounded-lg flex flex-col divide-gray-200', id: 'todo-names' }, '', 'todo-flex-container');\n    if (todos) {\n      Object.keys(todos).forEach((i) => (0,_codefactory__WEBPACK_IMPORTED_MODULE_1__.codefactory)('th', { scope: 'col', class: 'p-2 text-xs font-medium text-gray-500 self-center w-full hover:bg-blue-50 cursor-pointer' }, todos[i].name, 'todo-names').addEventListener('click', () => (0,_status__WEBPACK_IMPORTED_MODULE_2__.status)().todoStatus(i)));\n    }\n  };\n\n  const renderProjects = () => {\n    const projects = (0,_db__WEBPACK_IMPORTED_MODULE_0__.db)().load();\n    if (document.getElementById('project-names') != null) {\n      document.getElementById('project-names').remove();\n    }\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_1__.codefactory)('div', { class: 'border border-gray-200 my-3 p-5 rounded-lg flex flex-col divide-gray-200', id: 'project-names' }, '', 'project-flex-container');\n    Object.keys(projects).forEach(\n      (i) => {\n        (0,_codefactory__WEBPACK_IMPORTED_MODULE_1__.codefactory)('th', { scope: 'col', class: 'p-2 text-xs font-medium text-gray-500 self-center w-full hover:bg-blue-50 cursor-pointer' }, projects[i].name, 'project-names').addEventListener('click', () => ((0,_status__WEBPACK_IMPORTED_MODULE_2__.status)().projectStatus(i)));\n      },\n    );\n  };\n\n  return { renderProjects, renderTodos };\n};\n\n//# sourceURL=webpack://todo-list-js/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body */ \"./src/body.js\");\n\n\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_body__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n\n//# sourceURL=webpack://todo-list-js/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var _codefactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codefactory */ \"./src/codefactory.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db */ \"./src/db.js\");\n\n\n\n\n\nconst project = () => {\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'project-flex-container-size' }, '', 'body-flex-container');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'project-flex-container' }, '', 'project-flex-container-size');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Projects', 'project-flex-container');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('button', { class: 'flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'porject-add-button' }, '', 'project-flex-container').addEventListener('click', () => { projectForm.classList.toggle('hidden'); });\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('i', { class: 'fas fa-project-diagram mr-3' }, '', 'porject-add-button');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('span', { class: '' }, 'Add Project', 'porject-add-button');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('i', { class: 'fas fa-plus-square ml-auto' }, '', 'porject-add-button');\n  const projectForm = (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('form', { class: 'border border-gray-200 my-3 p-6 rounded-lg flex flex-col hidden', id: 'project-form', name: 'project-form' }, '', 'project-flex-container');\n  (0,_form__WEBPACK_IMPORTED_MODULE_1__.form)().project();\n  projectForm.addEventListener('submit', (0,_db__WEBPACK_IMPORTED_MODULE_3__.db)().parseProject);\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.helper)().renderProjects();\n};\n\n\n//# sourceURL=webpack://todo-list-js/./src/project.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"status\": () => (/* binding */ status)\n/* harmony export */ });\n/* harmony import */ var _codefactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codefactory */ \"./src/codefactory.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./src/db.js\");\n\n\n\n\nconst status = () => {\n  let project, todo;\n  const projects = (0,_db__WEBPACK_IMPORTED_MODULE_2__.db)().load();\n\n  const projectStatus = (i) => {\n    if (document.getElementById('status-flex-container-size') != null) {\n      document.getElementById('status-flex-container-size').remove();\n    }\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'status-flex-container-size' }, '', 'body-flex-container');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'status-flex-container' }, '', 'status-flex-container-size');\n\n    project = projects[i];\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Status', 'status-flex-container');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Name: '.concat(project.name), 'status-flex-container');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Description: '.concat(project.description), 'status-flex-container');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Priority: '.concat(project.priority), 'status-flex-container');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Duedate: '.concat(project.duedate), 'status-flex-container');\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.helper)().renderTodos(i);\n    window.projectIndex = i;\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'inline-flex w-full mt-2', id: 'project-controls' }, '', 'status-flex-container');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('button', { class: 'bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 w-full rounded-l' }, 'Edit', 'project-controls');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('button', { class: 'bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 w-full rounded-r' }, 'Drop', 'project-controls').addEventListener('click', (0,_db__WEBPACK_IMPORTED_MODULE_2__.db)().dropProject);\n  };\n\n  const todoStatus = (i) => {\n    if (document.getElementById('status-flex-container-size') != null) {\n      document.getElementById('status-flex-container-size').remove();\n    }\n    todo = projects[window.projectIndex].todos[i]\n    ;(0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'status-flex-container-size' }, '', 'body-flex-container');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'status-flex-container' }, '', 'status-flex-container-size');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Status', 'status-flex-container');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Name: '.concat(todo.name), 'status-flex-container');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Description: '.concat(todo.description), 'status-flex-container');\n    window.todoIndex = i;\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'inline-flex w-full mt-2', id: 'project-controls' }, '', 'status-flex-container');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('button', { class: 'bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 w-full rounded-l' }, 'Edit', 'project-controls');\n    (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('button', { class: 'bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 w-full rounded-r' }, 'Drop', 'project-controls').addEventListener('click', (0,_db__WEBPACK_IMPORTED_MODULE_2__.db)().dropTodo);\n  };\n\n  return {\n    projectStatus, todoStatus,\n  };\n};\n\n\n//# sourceURL=webpack://todo-list-js/./src/status.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\n/* harmony import */ var _codefactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codefactory */ \"./src/codefactory.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./src/db.js\");\n\n\n\n\nconst todo = () => {\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'todo-flex-container-size' }, '', 'body-flex-container');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'todo-flex-container' }, '', 'todo-flex-container-size');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Todos', 'todo-flex-container');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('button', { class: 'flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'todo-add-button' }, '', 'todo-flex-container').addEventListener('click', () => { todoForm.classList.toggle('hidden'); });\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('i', { class: 'fas fa-tasks mr-3' }, '', 'todo-add-button');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('span', { class: '' }, 'Add Todo', 'todo-add-button');\n  (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('i', { class: 'fas fa-plus-square ml-auto' }, '', 'todo-add-button');\n  const todoForm = (0,_codefactory__WEBPACK_IMPORTED_MODULE_0__.codefactory)('form', { class: 'border border-gray-200 my-3 p-6 rounded-lg flex flex-col hidden', id: 'todo-form' }, '', 'todo-flex-container');\n  (0,_form__WEBPACK_IMPORTED_MODULE_1__.form)().todo();\n  todoForm.addEventListener('submit', (0,_db__WEBPACK_IMPORTED_MODULE_2__.db)().parseTodo);\n};\n\n// export default project;\n\n\n//# sourceURL=webpack://todo-list-js/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;