#!/usr/bin/env node
import startGame from '../src/index.js';
import { gameTask, generateQuestion } from '../src/games/brain-calc.js';

startGame(gameTask, generateQuestion);
