// Simple discord bot made in Coding Club
require('dotenv').config()

const discord = require('discord.js');
const express = require('express');

const client = new discord.Client();
const prefix = process.env.PREFIX;

client.on('ready', () => console.log(`Bot online!`));

client.on('message', async message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (commandName === 'ping') {
    return message.reply('Pong!');
  }

  if (commandName === 'echo') {
    if (!args[0]) args[0] = 'echo';
    return message.reply(args.join(' '));
  }
});

client.login(process.env.TOKEN);