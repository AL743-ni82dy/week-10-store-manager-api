
const router = require('express').Router();
const {deleteStore, updateStore, createStore, getStores} = require('../database/stores');
const { route } = require('./productsRoutes');

router.get('/', async (req, res) => {
  res.send(await getStores());
});

// add post for stores
router.post('/', async (apiReq, apiResp) => {
  const newStore = apiReq.body;
  await createStore(newStore);
  apiResp.send({
    message: 'New store created.',
    allStores: await getStores(),
    thanks: true
  })
})
// add put for stores
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedStore = apiRequest.body;
  console.log({ updatedStore})
  await updateStore(apiRequest.params.id, updatedStore);
  apiResponse.send({ message: 'Store updated.' });
});

// add delete for stores
router.delete('/:storeId', async (apiRequest, apiResponse) => {
  await deleteStore(apiRequest.params.storeId);
  apiResponse.send({ message: 'Store deleted.' });
});




module.exports = router;
