import { environment } from 'src/environments/environment'

//export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'
export const baseUrl = environment.production ? 'http://localhost:3000' : 'http://localhost:3000'
export const generalUrl = baseUrl + '/admin'
export const userUrl = baseUrl + '/api/user'
