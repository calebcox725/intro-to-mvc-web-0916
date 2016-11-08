var stores = [{teachers: []}]

class Teacher {
  constructor(name, hometown) {
    this.name = name
    this.hometown = hometown

    var store = Object.assign({}, stores[stores.length-1])
    store.teachers.push(this)
    stores.push(store)
  }
}

$('input[type = "submit"]').on('click', function() {
  event.preventDefault()

  let name = $('input[name="name"]')[0].value
  let hometown = $('input[name="hometown"]')[0].value
  teacher = new Teacher(name, hometown)

  $('.container li')[0].innerHTML = `name: ${teacher.name} hometown: ${teacher.hometown}`
})