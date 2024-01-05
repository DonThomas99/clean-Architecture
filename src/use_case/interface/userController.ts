import User from '../../domain/user'
interface UserRepository {
    save(user: User):any;
    findByEmail(email:string):any
}
export default UserRepository