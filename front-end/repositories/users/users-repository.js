const resource = '/users'

export default (Repository) => {
  return {
    getAll() {
      console.log(123)
      return Repository.get(`${resource}`)
    },
    show(id) {
      return Repository.get(`${resource}/${id}`)
    },
    create(payload) {
      return Repository.post(`${resource}`, payload)
    },
    update(payload, id) {
      return Repository.put(`${resource}/${id}`, payload)
    },
    delete(id) {
      return Repository.delete(`${resource}/${id}`)
    },
  }
}
