const express = require('express');

const assetController = require('../controller/asset');

const router = express.Router();

router.post('/tag-asset', assetController.tagAsset);

router.get('/all-assets', assetController.getAllAssets);

module.exports = router;

// const callAPI = async (body) => {
//     await fetch('http://localhost:8080/asset/tag-asset', {
//     method: 'POST',
//     body: JSON.stringify(body),
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
// }