import {Cleaner} from "../../cleaner.js"
export class Button {
  /**
   * @type {HTMLHtmlElement}
   * */
  _parent = null

  /**
   * @type {HTMLHtmlElement}
   * */
  _element = null

  /**
   * @type {Map<string,()=>any>}*/
  _listeners = new Map()

  /**
   * @param {HTMLHtmlElement} parent
   * */
  constructor(parent){
    this._parent = parent
    this._element = document.createElement("button");
    this.#init()
  }

  #init(){
    Cleaner.observer.observe(this._parent,{childList:true})

    Cleaner.registerCleaup(this._element,()=>{
      this.#dispose()
    }) 

  }

  /**
   * @param {string} action
   * @param {()=>any} cb
   * */
  addEventListener(action,cb){
    this._element.addEventListener(action,cb)
    this._listeners.set(action,cb)
  }

  render(){
    this._parent.appendChild(this._element);
  }

  #dispose(){
    for(const [action,cb] of this._listeners){
      this._element.removeEventListener(action,cb)
    }
  }
} 

export class QuitGameButton  extends Button {
  
  /**
   * @param {HTMLHtmlElement} parent
   * */
  constructor(parent){
    super(parent)
    this.#init()
  }

  #init(){
    this._element.classList.add("quit-btn")

    // content
    this._element.textContent = "Quit"
    this.addEventListener('mouseenter', () => {
      this._element.classList.add('quit-btn-hover');
    });

    this.addEventListener('mouseleave', () => {
      this._element.classList.remove('quit-btn-hover');
    });
  }
}

