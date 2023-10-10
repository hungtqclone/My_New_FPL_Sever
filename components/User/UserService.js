const UserModel = require('./UserModel')
const bcrypt = require('bcryptjs')

//http://localhost:3000/api/user/login
const login = async (email, password) => {
    try {
        const user = await UserModel.findOne({ email: email })
        if (user) {
            const result = bcrypt.compareSync(password, user.password);
            return result ? user : false;
        }
    } catch (error) {
        console.log('Login error' + error)
        return false;
    }
}
//http://localhost:3000/api/user/loginGoogle
const loginGoogle = async (email, name, avatar) => {
    try {
        const user = await UserModel.findOne({ email: email })
        console.log("===========",user);
        if (user===null) {
            const newUser = { email, name, avatar };
            const u = new UserModel(newUser);
            await u.save();
            user.isLogin = true;
            console.log("Aaaaaaaaqweretfgfvsadfsgdha");
            return newUser;
          
        } else {
             // user.isLogin = true;
             console.log("Aaaaaaaaaaaaaaaaa");
             return user;
        }
    } catch (error) {
        console.log('loginGoogle error' + error)
        return false;
    }
}
//http://localhost:3000/api/user/register
const register = async (email, password, name, studentCode, avatar, role, createAt, updateAt,  isActive, isVerified) => {
    try {
        console.log("QQQQ", email, password, name, avatar, studentCode, role, createAt, updateAt,  isActive, isVerified)
        const user = await UserModel.findOne({ email: email })
        // console.log("userrrr", user)
        if (user == null) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = { email, password: hash, name, avatar, studentCode, role, createAt, updateAt,  isActive, isVerified };
            // console.log("--------->", newUser);
            const u = new UserModel(newUser);
            await u.save();
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log("Register error" + error)
        return false;
    }
}
const deleteUser = async (email) => {
    try {
        const user = await UserModel.findOne({ email: email })
        // console.log(user)
        {
            await UserModel.deleteOne(user)
        }
        return true;
    } catch (error) {
        console.log("Delete User  error", error);
        return false;

    }
}

const updateUser = async (email, password, name, description, gender, dob, avatar, role, createAt, updateAt, isLogin) => {
    try {
        const user = await UserModel.findOne({ email: email })
        if (user) {

            user.password = password ? password : user.password;
            user.name = name ? name : user.name;
            user.description = description ? description : user.description;

            user.gender = gender ? gender : user.gender;
            user.dob = dob ? dob : user.dob;
            user.avatar = avatar ? avatar : user.avatar;
            user.role = role ? role : user.role;

            user.createAt = createAt ? createAt : user.createAt;
            user.updateAt = updateAt ? updateAt : user.updateAt;
            user.isLogin = isLogin ? isLogin : user.isLogin;

            await user.save();
            console.log("INFO USER:", user);

            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log("Update User  error", error)
        return false;
    }
}
const search = async (email) => {
    try {
        // console.log("phoneNumber", email)
        return await UserModel.findOne(
            { email: email }
        )

    } catch (error) {
        return false;
    }
}
const getAllUser = async (page, size) => {
    try {
        // return data;
        return await UserModel.find();
        //  data.splice(index, 1);
    } catch (error) {
        console.log("List user Got an error: ", error);
        throw error;
    }
}
const changePassword = async (email, oldPassword, newPassword) => {
    try {
        const user = await UserModel.findOne({ email: email })
        if (user) {
            // console.log("INFO USER:", user);
            const isPasswordValid = await bcrypt.compare(oldPassword, user.password)
            if (isPasswordValid) {
                user.password = newPassword
                await user.save();
                return true;
            } else {
                return false
            }
        } else {
            return false;
        }
    } catch (error) {
        console.log("Change Password got an error: ", error);
        throw error;
    }
}

const getById = async (id) => {
    try {
        const user = await UserModel.findById({ _id: id });
        if (user != null) {
            return user
        } return false
    } catch (error) {
        console.log("Get product by id error " + error);
        return null;
    }
}

module.exports = {
    login, register, deleteUser, loginGoogle,
    updateUser, getAllUser, search, changePassword,
    getById,
};
