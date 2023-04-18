import user from "../schemas/user.schema.js";
import positions from "../schemas/positions.schema.js";
import groups from "../schemas/groups.schema.js";
import {
  JWT
} from "../utils/jwt.js";

class UserClass {
  async get(id, query, token) {
    if (query.username) {
      return await user.find({
        first_name: query.username,
        status: "on"
      }).populate('group_ref_id')
    } else if (query.contact) {
      return await user.find({
        contact: query.contact,
        status: "on"
      }).populate('group_ref_id')
    } else if (query.gender) {
      return await user.find({
        gender: query.gender,
        status: "on"
      }).populate('group_ref_id')
    } else {
      if (id) return await user.findById(id);
      else return await user.find({
        _id: JWT.VERIFY(token).id,
        status: "on"
      }).populate('group_ref_id');
    }
  }
  async allusers() {
    return await user.find()
  }
  async post(data) {
    try {
      let {
        _id
      } = await user.create(data);
      await positions.findByIdAndUpdate(data.pos_ref_id, {
        $push: {
          users: _id
        }
      });
      await groups.findByIdAndUpdate(data.group_ref_id, {
        $push: {
          users: _id
        }
      });
      return _id
    } catch (er) {
      return er;
    }
  }
  async put(id, data) {
    return await user.updateOne({
      _id: id
    }, data);
  }
  async userLogin(data) {
    if (data) {
      let {
        contact,
        email
      } = data
      let {
        _id
      } = await user.findOne({
        contact: contact,
        email: email
      });
      return {
        message: "Sizning ma'lumotlaringizni olish uchun token",
        token: JWT.SIGN({
          id: _id.toString()
        })
      }
    }
  }
  async delete(id, data) {
    return await user.deleteOne({
      _id: id
    });
  }
}

export default new UserClass();