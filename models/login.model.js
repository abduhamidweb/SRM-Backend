import login from "../schemas/login.schema.js";
import user from "../schemas/user.schema.js";
import {
  JWT
} from "../utils/jwt.js";
class loginClass {
  async get(id, query) {
    // if (query.username) {
    //   return await user.find({
    //     first_name: query.username
    //   })
    // } else if (query.contact) {
    //   return await user.find({
    //     contact: query.contact
    //   })
    // } else if (query.gender) {
    //   return await user.find({
    //     gender: query.gender
    //   })
    // } else {
    //   if (id) return await user.findById(id);
    //   else return await user.find();
    // }
    if (id) return await login.findById(id);
    else return await login.find();
  }
  async post(data) {
    try {
      let {
        email,
        contact
      } = await data;
  
      // let [{
      //   _id
      // }] = await user.find({
      //   email: email,
      //   contact: contact
      // })
      // if (_id) {
      //   return {
      //     token: JWT.SIGN({
      //       id: _id.toString()
      //     })
      //   }
      // }
    } catch (er) {
      return er;
    }
  }
  async put(id, data) {
    return await user.updateOne({
      _id: id
    }, data);
  }
  async delete(id, data) {
    return await user.deleteOne({
      _id: id
    });
  }
}

export default new loginClass();