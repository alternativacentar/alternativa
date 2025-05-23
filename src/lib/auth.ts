import { compare, hash } from 'bcryptjs';

export async function hashPassword(password: string): Promise<string> {
  return await hash(password, 12);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await compare(password, hashedPassword);
}

export function generateSecret() {
  return new TextEncoder().encode(
    process.env.JWT_SECRET || 'jwtsecredalternativa'
  );
}
