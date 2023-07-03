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
          
        </div>
      </div>
    )
}