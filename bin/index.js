#!/usr/bin/env node

const fetchActivity = require('../src/commands/fetchActivity');
const help = require('../src/commands/help');

const args = process.argv;

if (args.length === 0) {
    help();
} else {
    console.log('Fetching activity for:', args[2]);
    const username = args[2];
    fetchActivity(username);
}
