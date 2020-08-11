
const router = require('express').Router();
const {deleteCategories, updateCategories, createCategories, getCategoriess} = require('../database/categories');
const { route } = require('./productsRoutes');

router.get('/', async (req, res) => {
  res.send(await getCategoriess());
});

// add post for categoriess
router.post('/', async (apiReq, apiResp) => {
  const newCategories = apiReq.body;
  await createCategories(newCategories);
  apiResp.send({
    message: 'New categories created.',
    allCategoriess: await getCategoriess(),
    thanks: true
  })
})
// add put for categoriess
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedCategories = apiRequest.body;
  console.log({ updatedCategories})
  await updateCategories(apiRequest.params.id, updatedCategories);
  apiResponse.send({ message: 'Categories updated.' });
});

// add delete for categoriess
router.delete('/:categoriesId', async (apiRequest, apiResponse) => {
  await deleteCategories(apiRequest.params.categoriesId);
  apiResponse.send({ message: 'Categories deleted.' });
});




module.exports = router;
