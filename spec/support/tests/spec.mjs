// Clase TodoList

/*
"Debe ser una clase"

"Cada lista debe ser una instancia de ToDoList"

"Debería agregar un elemento a la lista"

"Debería eliminar el último elemento de la lista"

"Debería retornar la lista de elementos"
*/

const TodoList = require('../src/index.mjs');

describe('La clase ToDoList', () => {

    it('Debe ser una clase', () => {
        expect(typeof ToDoList).toBe('function');
    });

    it('Cada lista debe ser una instancia de ToDoList', () => {
        expect(new ToDoList()).toBeInstanceOf(ToDoList);
    });

    it('Debería agregar un elemento a la lista', () => {
        const list = new ToDoList();
        list.add('hola');
        expect(list.list).toEqual(['hola']);
    });

    it('Debería eliminar el último elemento de la lista', () => {
        const list = new ToDoList();
        list.add('hola', 'chau');
        list.remove();
        expect(list.list).toEqual(['chau']);
    });

    it('Debería retornar la lista de elementos', () => {
        const list = new ToDoList();
        list.add('hola', 'chau');
        expect(list.list).toEqual(['hola', 'chau']);
    });

});
