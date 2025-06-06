
export class Cleaner {

  /**
   * @type {Map<HTMLHtmlElement,()=>[]>}
   * */
  static cleaupCbs = new Map()

  static observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.removedNodes.forEach(function(node) {
        if(Cleaner.cleaupCbs.has(node)){
          for(const cb of Cleaner.cleaupCbs.get(node)){
            cb()
          }
        }
      });
    });
  });

  /**
   * @param {HTMLHtmlElement} node
   * @param {()=>any} callback
   * */
  static registerCleaup(node,callback){
    if (!this.cleaupCbs[node]){
      this.cleaupCbs[node] = []
    }
    !this.cleaupCbs[node].push(callback())
  }
}

