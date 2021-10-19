import UserRepository from '../repositories/users/users-repository'

const repositories = (axios) => {
  return {
    users: UserRepository(axios),
  }
}

export default ({ $axios }, inject) => {
  inject('api', repositories($axios))
}
