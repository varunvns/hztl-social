import { Session } from "next-auth";
export type SignupResponse = {
    message: string
}
export type CredentialModel = {
    email : string,
    password : string
}

export type SessionData = Session | null;

export type UserProfileProps = {
    session: Session | null 
}

export type ChangePassword = {
    oldpassword: string,
    newpassword : string
}

export type ProfileFormProps = {
    OnChangePassword : (passwordData : ChangePassword) => void;
}