import Jwt from "jsonwebtoken";
const sToken = 'karan'
let genrateToken = (id) => {
    return Jwt.sign({ id }, sToken, { expiresIn: '1h' })
}
export default genrateToken