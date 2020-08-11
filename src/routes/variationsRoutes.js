
const router = require('express').Router();
const {deleteVariation, updateVariation, createVariation, getVariations} = require('../database/variations');
const { route } = require('./productsRoutes');

router.get('/', async (req, res) => {
  res.send(await getVariations());
});

// add post for variations
router.post('/', async (apiReq, apiResp) => {
  const newVariation = apiReq.body;
  await createVariation(newVariation);
  apiResp.send({
    message: 'New variation created.',
    allVariations: await getVariations(),
    thanks: true
  })
})
// add put for variations
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedVariation = apiRequest.body;
  console.log({ updatedVariation})
  await updateVariation(apiRequest.params.id, updatedVariation);
  apiResponse.send({ message: 'Variation updated.' });
});

// add delete for variations
router.delete('/:variationId', async (apiRequest, apiResponse) => {
  await deleteVariation(apiRequest.params.variationId);
  apiResponse.send({ message: 'Variation deleted.' });
});




module.exports = router;
