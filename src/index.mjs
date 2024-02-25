class ToDoList {
    constructor() {
        this.ToDoList = [];
    }

    add(item) {
        this.ToDoList.push(item);
    }

    remove() {
        this.ToDoList.pop();
    }

    get() {
        return this.ToDoList;
    }

}


export default ToDoList;
