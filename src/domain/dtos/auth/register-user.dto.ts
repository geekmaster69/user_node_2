import { regularExps } from "../../../config";


export class RegisterUserDto {
    private constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
    ) { }

    static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {

        const { name, email, password } = object;

        if (!name) return ['Missing DTO name', undefined];

        if (!email) return ['Missing DTO email', undefined];

        if(!regularExps.email.test(email)) return['Email DTO is not valida', undefined];

        if (!password) return ['Missing DTO password', undefined];
        if(password.length < 6) return ['Password DTO is to short', undefined];

        return [undefined, new RegisterUserDto(name, email, password)];
    }
}