import { Role } from "../enums/role.enum";
import { Status } from "../enums/status.enum";

export interface IUser {
    id: number;
    login: string;
    email: string;
    phone: string;
    create_at: Date;
    modified_at: Date;
    role?: Role;
    status?: Status;
	hasSignature: boolean; // ЭП - электронная подпись?
}