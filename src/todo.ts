'use strict'

import {ITaskObj} from "./interfaces";

let tasksObj: ITaskObj = {
    pendingArray: [],
    completedArray: []
}

const PENDING_LIST = 'pending';
const COMPLETED_LIST = 'completed';
const TODO_STORAGE_KEY = 'todoData';

type TPosihion = 'pending' | 'completed';

const addField = <HTMLInputElement>document.getElementById('addField');
const addBtn = document.getElementById('addBtn');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');
const saveLS = document.getElementById('saveLS');
const loadLS = document.getElementById('loadLS');

saveLS.addEventListener('click',()=>{
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(tasksObj));
});
loadLS.addEventListener('click',()=>{
    const todoData = localStorage.getItem(TODO_STORAGE_KEY);
    if(todoData) {
        tasksObj = JSON.parse(todoData);
        updateList(PENDING_LIST);
        updateList(COMPLETED_LIST);
    }
})
addBtn.addEventListener('click', () => {
    const element = addField as HTMLInputElement;
    const value = element.value.trim();
    if (value) {
        tasksObj.pendingArray.push(value);
        element.value = '';
        updateList(PENDING_LIST);
    }
})
function updateList(list: TPosihion) {
    list === PENDING_LIST ? pendingTasks.innerHTML = '' : completedTasks.innerHTML = '';
    tasksObj[`${list}Array`].forEach((item, index) => {
        taskTemplate(item, list, index);
    });
    updateEvents(list);
}
function taskTemplate(message: string, todoPosition: TPosihion, index: number) {
    const task = `
        <div class="task ${todoPosition===COMPLETED_LIST ? 'completed' : ''}" data-type="${todoPosition}" data-index="${index}">
            <button class="ticket"></button>
            <p class="text">${message}</p>
            <input class="edit" type="text">
            <div class="buttons__wrapper">
                <button class="tool-button edit-btn">Edit</button>
                <button class="tool-button save-btn">Save</button>
                <button class="tool-button delete-btn">Delete</button>
            </div>
        </div>
    `;
    if (todoPosition === PENDING_LIST) {
        pendingTasks.insertAdjacentHTML('beforeend', task);
    }
    if (todoPosition === COMPLETED_LIST) {
        completedTasks.insertAdjacentHTML('beforeend', task);
    }
}
function updateEvents(listType: TPosihion) {
    const list = document.getElementById(`${listType}Tasks`);
    const tasks = list.querySelectorAll('.task');
    tasks.forEach((task: HTMLElement) => {
        const ticket = <HTMLElement>task.querySelector('.ticket');
        const text = <HTMLElement>task.querySelector('.text');
        const edit = <HTMLInputElement>task.querySelector('.edit');
        const saveBtn = <HTMLElement>task.querySelector('.save-btn');
        const editBtn = <HTMLElement>task.querySelector('.edit-btn');
        const deleteBtn = <HTMLElement>task.querySelector('.delete-btn');

        ticket.addEventListener('click', () => {
            const secondList = listType === PENDING_LIST ? COMPLETED_LIST : PENDING_LIST;
            const [saveTaskData] = tasksObj[`${listType}Array`].splice(+task.dataset.index, 1);
            tasksObj[`${secondList}Array`].unshift(saveTaskData);
            updateList(listType);
            updateList(secondList);
        })
        editBtn.addEventListener('click', () => {
            saveBtn.style.display = 'block';
            editBtn.style.display = 'none';
            text.style.display = 'none';
            edit.style.display = 'block';
            (edit as HTMLInputElement).value = tasksObj[`${listType}Array`][+task.dataset.index];
        });
        saveBtn.addEventListener('click', () => {
            editBtn.style.display = 'block';
            saveBtn.style.display = 'none';
            text.style.display = 'block';
            edit.style.display = 'none';
            text.innerText = (edit as HTMLInputElement).value;
            tasksObj[`${listType}Array`][+task.dataset.index] = (edit as HTMLInputElement).value;
        });
        deleteBtn.addEventListener('click', () => {
            tasksObj[`${listType}Array`].splice(+task.dataset.index, 1);
            updateList(listType);
        });

    })
}
