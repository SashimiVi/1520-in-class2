function updateInnerHTML(selector,string){
    document.querySelector(selector).innerHTML = string
}
updateInnerHTML('#updated',"Updated content") 


function strong(string){
    return `<strong>${string}</strong>`
}
const template = strong('2 cats') 
const second_template = strong('2 dogs')

console.log(template)

const updateInnerHTML = function (selector, htmlString) {
    document.querySelector(selector, htmlString).insertAdjacentHTML('beforebegin', htmlString);
  }
  
  updateInnerHTML('section', template)