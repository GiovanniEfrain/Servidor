import express from 'express'

import * as materialService from '../services/menu/materialService'

const router = express.Router()

router.get('/api/materials', (_req, res) => {
    res.send(materialService.getEntriesWithoutSensitiveInfo())
})

export default router;