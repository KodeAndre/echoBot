import { Collection } from 'discord.js';
// eslint-disable-next-line quotes
declare module "discord.js" {
  export interface Client {
    commands: Collection<unknown, Commands>
  }
}

export {};