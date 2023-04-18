import user from "../models/user.model.js";
import {
  JWT
} from "../utils/jwt.js";
import {
  sendConfirmationEmail
} from "../utils/nodemailer.js";
import userSchema from "../schemas/user.schema.js";

class UserContr {
  async find(req, res) {
    if (!(req.headers.token)) {
      res.send({
        message: "Please enter a token",
      })
    } else {
      const {
        id
      } = req.params;
      res.send(await user.get(id, req.query, req.headers.token));
    }
  }
  async allUsers(req, res) {
      res.send(await user.allusers());
  }
  async create(req, res) {
    res.send(await user.post(req.body));
  }
  async update(req, res) {
    const {
      id
    } = req.params;
    res.send(await user.put(id, req.body));
  }
  async userLogin(req, res) {
  res.send(await user.userLogin(req.body) )
  }
  async login(req, res) {
    let {
      email,
      contact
    } = req.body;
    sendConfirmationEmail(email, JWT.SIGN({
      id: contact
    }));
    try {
      res.send({
        message: "men sizning email addressizga link yubordim marhamat " + email
      })
    } catch (error) {
      res.send({
        message: error.message
      })
    }
  }
  async confirm(req, res) {
    let {
      id
    } = await req.params;
    res.send({
      token: id,
      message: "your token is saved successfully"
    })
  }
  async delete(req, res) {
    const {
      id
    } = req.params;
    res.send(await user.delete(id));
  }
}

export default new UserContr();