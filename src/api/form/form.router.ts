import express from 'express';
import {
    FormController
} from './form.controller';

///////////////////////////////////////////////////////////////////////////////////

export const register = (app: express.Application): void => {

    const router = express.Router();
    const controller = new FormController();

    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.get('/:id', controller.getById);
    router.get('/all', controller.getAll);
    router.delete('/:id', controller.delete);
    router.get('/by-template:templateId', controller.getByTemplateId);
    // router.get('/:id/questions/:questionId',  controller.getByQuestionId);
    router.post('/:id/submit', controller.submit);

    app.use('/api/v1/forms', router);
};
