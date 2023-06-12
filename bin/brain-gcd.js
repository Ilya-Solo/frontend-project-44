#!/usr/bin/env node
import startGame from '../src/index.js';
import { gameTask, generateQuestion } from '../src/games/brain-gcd.js';

startGame(gameTask, generateQuestion);
