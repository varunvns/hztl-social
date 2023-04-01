import { hash, compare } from "bcryptjs";

export async function encryptPassword(password:string) {
  const hashPassword = await hash(password, 12);
  return hashPassword;
}

export async function verifyPassword(password: string, hashPassword: string) {
    const isValid = await compare(password, hashPassword);
    return isValid;
}