import { UserModel } from "../../data";
import { CustomError, RegisterUserDto, UserEntity } from "../../domain";




export class AuthService {

    constructor() { }

    public async registerUser(registerDto: RegisterUserDto) {

        const existUser = await UserModel.findOne({ email: registerDto.email });


        if (existUser) throw CustomError.badRequest('Email already exist');

        try {

            const user = new UserModel(registerDto);

            await user.save();

            // TODO: encriptar el password

            //TODO: JWT


            const {password, ...userEntity} = UserEntity.fromObject(user);



            return {user: userEntity, token: 'ABC'};


        } catch (error) {
            throw CustomError.internalServer(`${error}`);

        }






    }
}