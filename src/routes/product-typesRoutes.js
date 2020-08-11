
const router = require('express').Router();
const {deleteProductType, updateProductType, createProductType, getProductTypes} = require('../database/product-types');
const { route } = require('./productsRoutes');

router.get('/', async (req, res) => {
  res.send(await getProductTypes());
});

// add post for productTypes
router.post('/', async (apiReq, apiResp) => {
  const newProductType = apiReq.body;
  await createProductType(newProductType);
  apiResp.send({
    message: 'New productType created.',
    allProductTypes: await getProductTypes(),
    thanks: true
  })
})
// add put for productTypes
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedProductType = apiRequest.body;
  console.log({ updatedProductType})
  await updateProductType(apiRequest.params.id, updatedProductType);
  apiResponse.send({ message: 'ProductType updated.' });
});

// add delete for productTypes
router.delete('/:productTypeId', async (apiRequest, apiResponse) => {
  await deleteProductType(apiRequest.params.productTypeId);
  apiResponse.send({ message: 'ProductType deleted.' });
});




module.exports = router;
