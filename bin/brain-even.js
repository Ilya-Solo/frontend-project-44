#!/usr/bin/env node
import startGame from '../src/index.js';
import { gameTask, generateQuestion } from '../src/games/brain-even.js';

startGame(gameTask, generateQuestion);
