
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


module.exports = router;
