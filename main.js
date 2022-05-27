/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/category.js":
/*!*************************!*\
  !*** ./src/category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nclass Category{\n    constructor(categoryRoot){\n        this.categoryRoot = categoryRoot\n        this.taskList = []\n    }\n\n    pushTask(task){\n        this.taskList.push(task)\n    }\n\n    createNewCategory(){\n        let formData = new FormData(document.querySelector('#new-category'))\n        let newCategory = {}\n        for (let [key, value] of formData){\n            newCategory[\"taskList\"] = []\n            newCategory[key] = value\n            newCategory['identifier'] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)\n            const addTask = function(task){\n                newCategory[\"taskList\"].push(task)\n            }\n            newCategory.addTask = addTask\n          } \n        return newCategory;\n    }\n    \n   \n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7OztBQUdqQjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jYXRlZ29yeS5qcz9iZTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3N0Q2F0ZWdvcnkgZnJvbSBcIi4vZG9tXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeXtcbiAgICBjb25zdHJ1Y3RvcihjYXRlZ29yeVJvb3Qpe1xuICAgICAgICB0aGlzLmNhdGVnb3J5Um9vdCA9IGNhdGVnb3J5Um9vdFxuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW11cbiAgICB9XG5cbiAgICBwdXNoVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spXG4gICAgfVxuXG4gICAgY3JlYXRlTmV3Q2F0ZWdvcnkoKXtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctY2F0ZWdvcnknKSlcbiAgICAgICAgbGV0IG5ld0NhdGVnb3J5ID0ge31cbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhKXtcbiAgICAgICAgICAgIG5ld0NhdGVnb3J5W1widGFza0xpc3RcIl0gPSBbXVxuICAgICAgICAgICAgbmV3Q2F0ZWdvcnlba2V5XSA9IHZhbHVlXG4gICAgICAgICAgICBuZXdDYXRlZ29yeVsnaWRlbnRpZmllciddID0gbmV3Q2F0ZWdvcnkuY2F0ZWdvcnkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDk5OS0xMDArMSkrMTAwKVxuICAgICAgICAgICAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uKHRhc2spe1xuICAgICAgICAgICAgICAgIG5ld0NhdGVnb3J5W1widGFza0xpc3RcIl0ucHVzaCh0YXNrKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Q2F0ZWdvcnkuYWRkVGFzayA9IGFkZFRhc2tcbiAgICAgICAgICB9IFxuICAgICAgICByZXR1cm4gbmV3Q2F0ZWdvcnk7XG4gICAgfVxuICAgIFxuICAgXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/category.js\n");

/***/ }),

/***/ "./src/currentcategory.js":
/*!********************************!*\
  !*** ./src/currentcategory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CurrentCategory)\n/* harmony export */ });\nclass CurrentCategory{\n    constructor(name){\n        this.setName(name);\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    setName(categoryName){\n        this.name = categoryName\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3VycmVudGNhdGVnb3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2N1cnJlbnRjYXRlZ29yeS5qcz8xODY2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbnRDYXRlZ29yeXtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5zZXROYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShjYXRlZ29yeU5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBjYXRlZ29yeU5hbWVcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/currentcategory.js\n");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostCategory)\n/* harmony export */ });\n\n\n\n\nclass PostCategory{\n    constructor(){\n        // this.categoryRoot = categoryRoot\n    }\n\n    updateCategoryDom(category, categoryStatus){\n        console.log(category.category)\n        let categoryRoot = document.querySelector('.category-card')\n        console.log(categoryRoot)\n        \n        // console.log(this.categoryRoot)\n        let newCategoryDiv = document.createElement('div')\n        newCategoryDiv.classList.add('category-container')\n        let newCategoryText = document.createElement('p')\n        \n        newCategoryDiv.setAttribute('id', `${category.identifier}`)\n        \n        newCategoryDiv.addEventListener('click', function(){\n            console.log(`I am ${category.identifier}`)\n            category[\"current\"] = true\n            categoryStatus.setName(category.identifier)\n\n            console.log(categoryStatus)\n            \n           \n        })\n\n        let deleteCategory = document.createElement('span')\n        deleteCategory.classList.add('material-symbols-outlined')\n        deleteCategory.classList.add(`categoryDelete`)\n        deleteCategory.setAttribute('id', `${category.identifier}`)\n        deleteCategory.innerText = 'delete'\n\n        newCategoryText.textContent = category.category\n        newCategoryDiv.appendChild(newCategoryText)\n        newCategoryDiv.appendChild(deleteCategory)\n        categoryRoot.appendChild(newCategoryDiv)   \n    }\n\n    updateTaskDom(task){\n        console.log(task)\n        let taskRoot = document.querySelector('.todo-item-container')\n        let newTaskDiv = document.createElement('div')\n        newTaskDiv.classList.add('todo-item')\n        newTaskDiv.setAttribute('id', `${task.identifier}`)\n\n        let name = document.createElement('div')\n        name.classList.add('task-name')\n        name.innerText = task['task-name']\n\n        let date = document.createElement('div')\n        date.classList.add('date')\n        date.innerText = task['task-date']\n\n        let priority = document.createElement('div')\n        priority.classList.add('priority')\n        priority.innerText = task['task-priority']\n\n        \n\n        let deleteTask = document.createElement('span')\n        deleteTask.classList.add('material-symbols-outlined')\n        deleteTask.classList.add('taskDelete')\n        deleteTask.setAttribute('id', `${task.identifier}`)\n        deleteTask.innerText = 'delete'\n\n        newTaskDiv.appendChild(name)\n        newTaskDiv.appendChild(date)\n        newTaskDiv.appendChild(priority)\n        newTaskDiv.appendChild(deleteTask)\n        \n\n\n        taskRoot.appendChild(newTaskDiv)\n    }\n\n    deleteTaskDom(){\n        let taskRoot = document.querySelector('.todo-item-container')\n        taskRoot.remove()\n        let newTaskRoot = document.createElement('div')\n        newTaskRoot.classList.add('todo-item-container')\n        let formRoot = document.querySelector('.right-container')\n        formRoot.appendChild(newTaskRoot)\n    }\n\n    deleteOneTask(){\n\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsb0JBQW9CO0FBQ2pFO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsb0JBQW9CO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxnQkFBZ0I7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxnQkFBZ0I7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbS5qcz9jYmYwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdENhdGVnb3J5e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIHRoaXMuY2F0ZWdvcnlSb290ID0gY2F0ZWdvcnlSb290XG4gICAgfVxuXG4gICAgdXBkYXRlQ2F0ZWdvcnlEb20oY2F0ZWdvcnksIGNhdGVnb3J5U3RhdHVzKXtcbiAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkuY2F0ZWdvcnkpXG4gICAgICAgIGxldCBjYXRlZ29yeVJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktY2FyZCcpXG4gICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5Um9vdClcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2F0ZWdvcnlSb290KVxuICAgICAgICBsZXQgbmV3Q2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuZXdDYXRlZ29yeURpdi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1jb250YWluZXInKVxuICAgICAgICBsZXQgbmV3Q2F0ZWdvcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIFxuICAgICAgICBuZXdDYXRlZ29yeURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7Y2F0ZWdvcnkuaWRlbnRpZmllcn1gKVxuICAgICAgICBcbiAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEkgYW0gJHtjYXRlZ29yeS5pZGVudGlmaWVyfWApXG4gICAgICAgICAgICBjYXRlZ29yeVtcImN1cnJlbnRcIl0gPSB0cnVlXG4gICAgICAgICAgICBjYXRlZ29yeVN0YXR1cy5zZXROYW1lKGNhdGVnb3J5LmlkZW50aWZpZXIpXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5U3RhdHVzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBkZWxldGVDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBkZWxldGVDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJylcbiAgICAgICAgZGVsZXRlQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChgY2F0ZWdvcnlEZWxldGVgKVxuICAgICAgICBkZWxldGVDYXRlZ29yeS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7Y2F0ZWdvcnkuaWRlbnRpZmllcn1gKVxuICAgICAgICBkZWxldGVDYXRlZ29yeS5pbm5lclRleHQgPSAnZGVsZXRlJ1xuXG4gICAgICAgIG5ld0NhdGVnb3J5VGV4dC50ZXh0Q29udGVudCA9IGNhdGVnb3J5LmNhdGVnb3J5XG4gICAgICAgIG5ld0NhdGVnb3J5RGl2LmFwcGVuZENoaWxkKG5ld0NhdGVnb3J5VGV4dClcbiAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQ2F0ZWdvcnkpXG4gICAgICAgIGNhdGVnb3J5Um9vdC5hcHBlbmRDaGlsZChuZXdDYXRlZ29yeURpdikgICBcbiAgICB9XG5cbiAgICB1cGRhdGVUYXNrRG9tKHRhc2spe1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgICAgICBsZXQgdGFza1Jvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1pdGVtLWNvbnRhaW5lcicpXG4gICAgICAgIGxldCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKVxuICAgICAgICBuZXdUYXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrLmlkZW50aWZpZXJ9YClcblxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJylcbiAgICAgICAgbmFtZS5pbm5lclRleHQgPSB0YXNrWyd0YXNrLW5hbWUnXVxuXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJylcbiAgICAgICAgZGF0ZS5pbm5lclRleHQgPSB0YXNrWyd0YXNrLWRhdGUnXVxuXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5JylcbiAgICAgICAgcHJpb3JpdHkuaW5uZXJUZXh0ID0gdGFza1sndGFzay1wcmlvcml0eSddXG5cbiAgICAgICAgXG5cbiAgICAgICAgbGV0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJylcbiAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrRGVsZXRlJylcbiAgICAgICAgZGVsZXRlVGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFzay5pZGVudGlmaWVyfWApXG4gICAgICAgIGRlbGV0ZVRhc2suaW5uZXJUZXh0ID0gJ2RlbGV0ZSdcblxuICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5hbWUpXG4gICAgICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVUYXNrKVxuICAgICAgICBcblxuXG4gICAgICAgIHRhc2tSb290LmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpXG4gICAgfVxuXG4gICAgZGVsZXRlVGFza0RvbSgpe1xuICAgICAgICBsZXQgdGFza1Jvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1pdGVtLWNvbnRhaW5lcicpXG4gICAgICAgIHRhc2tSb290LnJlbW92ZSgpXG4gICAgICAgIGxldCBuZXdUYXNrUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld1Rhc2tSb290LmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1jb250YWluZXInKVxuICAgICAgICBsZXQgZm9ybVJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtY29udGFpbmVyJylcbiAgICAgICAgZm9ybVJvb3QuYXBwZW5kQ2hpbGQobmV3VGFza1Jvb3QpXG4gICAgfVxuXG4gICAgZGVsZXRlT25lVGFzaygpe1xuXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dom.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n/* harmony import */ var _currentcategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentcategory */ \"./src/currentcategory.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\n\nlet categoryForm = document.getElementById('new-category')\nlet categoryRoot = document.querySelector('.category-card')\n// let taskRoot = document.querySelector('.todo-item-container')\nlet taskForm = document.getElementById('todo-submit')\nlet currentCategory = ''\n\nlet currentCategories = []\n\nlet testCategory = new _category__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('new-category'), document.querySelector('.category-card'))\nlet categoryStatus = new _currentcategory__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\nlet taskDeleter = new _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\ncategoryStatus.setName('default')\n\n\nlet addTaskListeners = function(){\n  let todoNodeArray = document.querySelectorAll('.todo-item')\n  console.log(todoNodeArray)\n  for (let todo of todoNodeArray){\n    let todoDelete = todo.querySelector('span')\n    todoDelete.addEventListener('click', () => {\n      console.log('hello')\n        todo.remove()\n        for(let category of currentCategories){\n          for(let task of category.taskList){\n            if(task.identifier === todo.id){\n              console.log(category)\n              let index = category.taskList.indexOf(task)\n              category.taskList.splice(index, 1)\n            }\n          }\n        }\n        console.log(`I am ${todo.id}`)\n    }) \n  }\n}\n\n// check if there are categories left\nlet noCategoryCheck = function(){\n  let categoryRoot = document.querySelector('.category-card')\n  console.log(categoryRoot.children.length)\n  if (categoryRoot.children.length > 0) { \n    return true\n  }\n  else {return false}\n}\n\n\n// click events\ncategoryForm.onsubmit = function(e) {\n  let newCategory = testCategory.createNewCategory()\n  let updateCategory = new _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n  updateCategory.updateCategoryDom(newCategory, categoryStatus);\n  currentCategories.push(newCategory)\n\n  let categoryArray = document.getElementsByClassName('category-container')\n  \n  for (let category of categoryArray){\n    let categoryP = category.querySelector('p')\n    categoryP.addEventListener('click', () => {\n      console.log('IM CLICKED')\n      let formSubmitButton = document.querySelector('#todo-submit > input[type=submit]:nth-child(4)')\n      console.log(formSubmitButton)\n      formSubmitButton.removeAttribute('disabled')\n      taskDeleter.deleteTaskDom();\n      // addTaskListeners();\n      console.log(category.id)\n      for(let object of currentCategories){\n        if(object.identifier === category.id){\n          for(let task of object.taskList){\n            taskDeleter.updateTaskDom(task)\n            addTaskListeners();\n          }\n        }\n      }\n    })\n\n    let categoryDeleteArray = document.querySelectorAll('.category-container > span')\n    for (let span of categoryDeleteArray){\n      span.addEventListener('click', () => {\n        if(category.id === span.id){\n          category.remove();\n          \n          // let deleteTasks = \n          let e = document.querySelector(\".todo-item-container\");\n        \n          //e.firstElementChild can be used.\n          var child = e.lastElementChild; \n          while (child) {\n              e.removeChild(child);\n              child = e.lastElementChild;\n          } \n\n          // check if there is no category in the list, if so disable the form for submitting a task\n          if (!noCategoryCheck()){\n            console.log(noCategoryCheck())\n            let formSubmitButton = document.querySelector('#todo-submit > input[type=submit]:nth-child(4)')\n            console.log(formSubmitButton)\n            formSubmitButton.setAttribute('disabled', 'disabled')\n          }\n        }\n      })\n    }\n  }\n  e.preventDefault();\n}\n\ntaskForm.onsubmit = function(e) {\n  console.log('pingas')\n  for(let category of currentCategories){\n    if(category.identifier === categoryStatus.getName()){\n      let newTaskObject = new _task__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      let task = newTaskObject.createNewTask()\n      category.addTask(task)\n      let updateTask = new _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n      updateTask.updateTaskDom(task)\n      console.log(task[\"task-name\"])\n    }  \n  }\n\n  addTaskListeners()\n  \n  e.preventDefault();\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUM7QUFDYztBQUNmO0FBQ1A7OztBQUd6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1QixpREFBUTtBQUMvQix5QkFBeUIsd0RBQWU7QUFDeEMsc0JBQXNCLDRDQUFZO0FBQ2xDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEMsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0Q0FBWTtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZDQUFJO0FBQ2xDO0FBQ0E7QUFDQSwyQkFBMkIsNENBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5XCJcbmltcG9ydCBDdXJyZW50Q2F0ZWdvcnkgZnJvbSBcIi4vY3VycmVudGNhdGVnb3J5XCJcbmltcG9ydCBQb3N0Q2F0ZWdvcnkgZnJvbSBcIi4vZG9tXCJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIlxuXG5cbmxldCBjYXRlZ29yeUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWNhdGVnb3J5JylcbmxldCBjYXRlZ29yeVJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktY2FyZCcpXG4vLyBsZXQgdGFza1Jvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1pdGVtLWNvbnRhaW5lcicpXG5sZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1zdWJtaXQnKVxubGV0IGN1cnJlbnRDYXRlZ29yeSA9ICcnXG5cbmxldCBjdXJyZW50Q2F0ZWdvcmllcyA9IFtdXG5cbmxldCB0ZXN0Q2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1jYXRlZ29yeScpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktY2FyZCcpKVxubGV0IGNhdGVnb3J5U3RhdHVzID0gbmV3IEN1cnJlbnRDYXRlZ29yeVxubGV0IHRhc2tEZWxldGVyID0gbmV3IFBvc3RDYXRlZ29yeVxuY2F0ZWdvcnlTdGF0dXMuc2V0TmFtZSgnZGVmYXVsdCcpXG5cblxubGV0IGFkZFRhc2tMaXN0ZW5lcnMgPSBmdW5jdGlvbigpe1xuICBsZXQgdG9kb05vZGVBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKVxuICBjb25zb2xlLmxvZyh0b2RvTm9kZUFycmF5KVxuICBmb3IgKGxldCB0b2RvIG9mIHRvZG9Ob2RlQXJyYXkpe1xuICAgIGxldCB0b2RvRGVsZXRlID0gdG9kby5xdWVyeVNlbGVjdG9yKCdzcGFuJylcbiAgICB0b2RvRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2hlbGxvJylcbiAgICAgICAgdG9kby5yZW1vdmUoKVxuICAgICAgICBmb3IobGV0IGNhdGVnb3J5IG9mIGN1cnJlbnRDYXRlZ29yaWVzKXtcbiAgICAgICAgICBmb3IobGV0IHRhc2sgb2YgY2F0ZWdvcnkudGFza0xpc3Qpe1xuICAgICAgICAgICAgaWYodGFzay5pZGVudGlmaWVyID09PSB0b2RvLmlkKXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpXG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IGNhdGVnb3J5LnRhc2tMaXN0LmluZGV4T2YodGFzaylcbiAgICAgICAgICAgICAgY2F0ZWdvcnkudGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgSSBhbSAke3RvZG8uaWR9YClcbiAgICB9KSBcbiAgfVxufVxuXG4vLyBjaGVjayBpZiB0aGVyZSBhcmUgY2F0ZWdvcmllcyBsZWZ0XG5sZXQgbm9DYXRlZ29yeUNoZWNrID0gZnVuY3Rpb24oKXtcbiAgbGV0IGNhdGVnb3J5Um9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1jYXJkJylcbiAgY29uc29sZS5sb2coY2F0ZWdvcnlSb290LmNoaWxkcmVuLmxlbmd0aClcbiAgaWYgKGNhdGVnb3J5Um9vdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7IFxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgZWxzZSB7cmV0dXJuIGZhbHNlfVxufVxuXG5cbi8vIGNsaWNrIGV2ZW50c1xuY2F0ZWdvcnlGb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24oZSkge1xuICBsZXQgbmV3Q2F0ZWdvcnkgPSB0ZXN0Q2F0ZWdvcnkuY3JlYXRlTmV3Q2F0ZWdvcnkoKVxuICBsZXQgdXBkYXRlQ2F0ZWdvcnkgPSBuZXcgUG9zdENhdGVnb3J5KClcbiAgdXBkYXRlQ2F0ZWdvcnkudXBkYXRlQ2F0ZWdvcnlEb20obmV3Q2F0ZWdvcnksIGNhdGVnb3J5U3RhdHVzKTtcbiAgY3VycmVudENhdGVnb3JpZXMucHVzaChuZXdDYXRlZ29yeSlcblxuICBsZXQgY2F0ZWdvcnlBcnJheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhdGVnb3J5LWNvbnRhaW5lcicpXG4gIFxuICBmb3IgKGxldCBjYXRlZ29yeSBvZiBjYXRlZ29yeUFycmF5KXtcbiAgICBsZXQgY2F0ZWdvcnlQID0gY2F0ZWdvcnkucXVlcnlTZWxlY3RvcigncCcpXG4gICAgY2F0ZWdvcnlQLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0lNIENMSUNLRUQnKVxuICAgICAgbGV0IGZvcm1TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1zdWJtaXQgPiBpbnB1dFt0eXBlPXN1Ym1pdF06bnRoLWNoaWxkKDQpJylcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1TdWJtaXRCdXR0b24pXG4gICAgICBmb3JtU3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgdGFza0RlbGV0ZXIuZGVsZXRlVGFza0RvbSgpO1xuICAgICAgLy8gYWRkVGFza0xpc3RlbmVycygpO1xuICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkuaWQpXG4gICAgICBmb3IobGV0IG9iamVjdCBvZiBjdXJyZW50Q2F0ZWdvcmllcyl7XG4gICAgICAgIGlmKG9iamVjdC5pZGVudGlmaWVyID09PSBjYXRlZ29yeS5pZCl7XG4gICAgICAgICAgZm9yKGxldCB0YXNrIG9mIG9iamVjdC50YXNrTGlzdCl7XG4gICAgICAgICAgICB0YXNrRGVsZXRlci51cGRhdGVUYXNrRG9tKHRhc2spXG4gICAgICAgICAgICBhZGRUYXNrTGlzdGVuZXJzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGxldCBjYXRlZ29yeURlbGV0ZUFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWNvbnRhaW5lciA+IHNwYW4nKVxuICAgIGZvciAobGV0IHNwYW4gb2YgY2F0ZWdvcnlEZWxldGVBcnJheSl7XG4gICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihjYXRlZ29yeS5pZCA9PT0gc3Bhbi5pZCl7XG4gICAgICAgICAgY2F0ZWdvcnkucmVtb3ZlKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gbGV0IGRlbGV0ZVRhc2tzID0gXG4gICAgICAgICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8taXRlbS1jb250YWluZXJcIik7XG4gICAgICAgIFxuICAgICAgICAgIC8vZS5maXJzdEVsZW1lbnRDaGlsZCBjYW4gYmUgdXNlZC5cbiAgICAgICAgICB2YXIgY2hpbGQgPSBlLmxhc3RFbGVtZW50Q2hpbGQ7IFxuICAgICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgICAgICBlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgY2hpbGQgPSBlLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgfSBcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIG5vIGNhdGVnb3J5IGluIHRoZSBsaXN0LCBpZiBzbyBkaXNhYmxlIHRoZSBmb3JtIGZvciBzdWJtaXR0aW5nIGEgdGFza1xuICAgICAgICAgIGlmICghbm9DYXRlZ29yeUNoZWNrKCkpe1xuICAgICAgICAgICAgY29uc29sZS5sb2cobm9DYXRlZ29yeUNoZWNrKCkpXG4gICAgICAgICAgICBsZXQgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXN1Ym1pdCA+IGlucHV0W3R5cGU9c3VibWl0XTpudGgtY2hpbGQoNCknKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybVN1Ym1pdEJ1dHRvbilcbiAgICAgICAgICAgIGZvcm1TdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbnRhc2tGb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24oZSkge1xuICBjb25zb2xlLmxvZygncGluZ2FzJylcbiAgZm9yKGxldCBjYXRlZ29yeSBvZiBjdXJyZW50Q2F0ZWdvcmllcyl7XG4gICAgaWYoY2F0ZWdvcnkuaWRlbnRpZmllciA9PT0gY2F0ZWdvcnlTdGF0dXMuZ2V0TmFtZSgpKXtcbiAgICAgIGxldCBuZXdUYXNrT2JqZWN0ID0gbmV3IFRhc2tcbiAgICAgIGxldCB0YXNrID0gbmV3VGFza09iamVjdC5jcmVhdGVOZXdUYXNrKClcbiAgICAgIGNhdGVnb3J5LmFkZFRhc2sodGFzaylcbiAgICAgIGxldCB1cGRhdGVUYXNrID0gbmV3IFBvc3RDYXRlZ29yeTtcbiAgICAgIHVwZGF0ZVRhc2sudXBkYXRlVGFza0RvbSh0YXNrKVxuICAgICAgY29uc29sZS5sb2codGFza1tcInRhc2stbmFtZVwiXSlcbiAgICB9ICBcbiAgfVxuXG4gIGFkZFRhc2tMaXN0ZW5lcnMoKVxuICBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    constructor(){\n        // get name of the category that the task is supposed to be in\n    }\n\n    createNewTask(){\n        let formData = new FormData(document.querySelector('#todo-submit'))\n        let newTask = {}\n        for (let [key, value] of formData){\n            newTask[key] = value\n            newTask['identifier'] = newTask['task-name'] + Math.floor(Math.random()*(999-100+1)+100)\n          } \n        return newTask;\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFzay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2suanM/N2MxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIGdldCBuYW1lIG9mIHRoZSBjYXRlZ29yeSB0aGF0IHRoZSB0YXNrIGlzIHN1cHBvc2VkIHRvIGJlIGluXG4gICAgfVxuXG4gICAgY3JlYXRlTmV3VGFzaygpe1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tc3VibWl0JykpXG4gICAgICAgIGxldCBuZXdUYXNrID0ge31cbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhKXtcbiAgICAgICAgICAgIG5ld1Rhc2tba2V5XSA9IHZhbHVlXG4gICAgICAgICAgICBuZXdUYXNrWydpZGVudGlmaWVyJ10gPSBuZXdUYXNrWyd0YXNrLW5hbWUnXSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooOTk5LTEwMCsxKSsxMDApXG4gICAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2s7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/task.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;