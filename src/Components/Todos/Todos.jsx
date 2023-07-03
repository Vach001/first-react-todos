export default function Todos(){
    return (
        <div class="container">
        <div class="row">
          <header class="row__header">
            <h1>My todo</h1>
          </header>
          <section class="row__items">
            <div class="todo-item">
              <div class="todo-item__check-section checked"></div>
              <div class="todo-item__name-section">
                <span>Item 1</span>
                {/* <!-- <input type="text" value="Item1" /> --> */}
              </div>
              <div class="todo-item__config-btns">
                <button class="btn btn-primary" id="todo-edit">
                  <i class="far fa-edit"></i>
                </button>
                <button class="btn btn-danger" id="todo-delete">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </section>
          <footer class="row__footer">
            <button class="btn btn-success" id="add-new">Add new item</button>
            <button class="btn btn-danger" id="delete-selected">
              Delete selected
            </button>
            <button class="btn btn-warning" id="delete-all">Delete all</button>
          </footer>
        </div>
      </div>
    )
}