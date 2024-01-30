import { z } from 'zod';
import { EnvParser } from '../src/main';
import 'dotenv/config';

const schema = z.union([
  z.object({
    command: z.literal('hello'),
    option_hello_name: z.string().default('world'),
    option_hello_age: z.string({ description: 'text' }).optional(),
  }),
  z.object({
    command: z.literal('goodbye'),
  }),
]);

const inputs = new EnvParser().parse(schema);
console.log(`Env variables: `, inputs);
