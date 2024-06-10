// src/config/clerk.config.ts
import { registerAs } from '@nestjs/config';

export default registerAs('clerk', () => ({
  apiKey: process.env.CLERK_SECRET_KEY,
}));