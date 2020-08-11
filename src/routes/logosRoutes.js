
const router = require('express').Router();
const {deleteLogo, updateLogo, createLogo, getLogos} = require('../database/logos');
const { route } = require('./productsRoutes');

router.get('/', async (req, res) => {
  res.send(await getLogos());
});

// add post for logos
router.post('/', async (apiReq, apiResp) => {
  const newLogo = apiReq.body;
  await createLogo(newLogo);
  apiResp.send({
    message: 'New logo created.',
    allLogos: await getLogos(),
    thanks: true
  })
})
// add put for logos
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedLogo = apiRequest.body;
  console.log({ updatedLogo})
  await updateLogo(apiRequest.params.id, updatedLogo);
  apiResponse.send({ message: 'Logo updated.' });
});

// add delete for logos
router.delete('/:logoId', async (apiRequest, apiResponse) => {
  await deleteLogo(apiRequest.params.logoId);
  apiResponse.send({ message: 'Logo deleted.' });
});




module.exports = router;
