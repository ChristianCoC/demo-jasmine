// Clase TodoList

/*
"Debe ser una clase"

"Cada lista debe ser una instancia de ToDoList"

"Debería agregar un elemento a la lista"

"Debería eliminar el último elemento de la lista"

"Debería retornar la lista de elementos"
*/

import ToDoList from '../../../src/index.mjs';

describe('La clase ToDoList', () => {

    it('Debe ser una clase', () => {
        expect(typeof ToDoList).toBe('function');
    });

    it('Cada lista debe ser una instancia de ToDoList', () => {
        expect(new ToDoList()).toBeInstanceOf(ToDoList);
    });

    it('Debería agregar un elemento a la lista', () => {
        const list = new ToDoList();
        expect(list.add).toBeDefined();
    });

    it('Debería eliminar el último elemento de la lista', () => {
        const list = new ToDoList();
        expect(list.remove).toBeDefined();
    });

    it('Debería retornar la lista de elementos', () => {
        const list = new ToDoList();
        expect(list.get).toBeDefined();
    });

});
