// tools freme
const {Router } = require('express');
const router = Router();
// local
const { getUser, postUser, patchUser, deleteUser, putUser  } = require('../controllers/user');
// definimos metodos contenidos en la clase Router.


router.get('/', getUser);
router.put('/:pk', putUser);
router.post('/', postUser);
router.delete('/', deleteUser);
router.patch('/', patchUser);


module.exports = router;



