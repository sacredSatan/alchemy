import express from 'express';
import {getPirateById} from '../helpers/apiMiddlewares.js';
import {pirateListController, pirateDetailController} from '../controllers/pirateController';

export default (Pirate) => {
  const pirateRouter = express.Router();
  const listController = pirateListController(Pirate);
  const detailController = pirateDetailController(Pirate);
  const getPirateHelper = getPirateById(Pirate);

  pirateRouter.route('/')
    .get(listController.get)
    .post(listController.post);

  pirateRouter.use('/:pirateId', getPirateHelper);

  pirateRouter.route('/:pirateId')
    .get(detailController.get)
    .put(detailController.put)
    .patch(detailController.patch)
    .delete(detailController.del);

  return pirateRouter;
}
