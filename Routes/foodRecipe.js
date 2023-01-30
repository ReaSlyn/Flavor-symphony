import pkg from 'express'
const express  = pkg;
const router = express.Router()
import { foodRecipe } from '../Controller/'

router.get('/', foodRecipe.getAll)
