import express from 'express';
import { ResponseHandler } from '../../common/response.handler';
import { FormTemplateValidator } from './form.template.validator';
import { BaseController } from '../base.controller';
import { ErrorHandler } from '../../common/error.handler';
import { uuid } from '../../domain.types/miscellaneous/system.types';
import { error } from 'console';
import { ServiceFormTemplate } from '../../services/form.template.service';
import { FormTemplateCreateModel, FormTemplateUpdateModel } from '../../domain.types/forms/form.template.domain.types';
import { randomInt } from 'crypto';

///////////////////////////////////////////////////////////////////////////////////////

export class FormTemplateController extends BaseController {
    // createTypeModel = async (request: express.Request): Promise<FormTemplateCreateModel> => {
    //     const model: FormTemplateCreateModel = {
    //         Title: request.body.Title,
    //         Description: request.body.Description ?? null,
    //         Type: request.body.Type,
    //         CurrentVersion: request.body.CurrentVersion ?? 1,
    //         DisplayCode: request.body.DisplayCode ?? `FT-${randomInt(10000)}`,
    //         DefaultSectionNumbering: request.body.DefaultSectionNumbering ?? false,
    //     };
    //     return model;
    // };
    //#region member variables and constructors

    _service: ServiceFormTemplate = new ServiceFormTemplate();

    _validator: FormTemplateValidator = new FormTemplateValidator();

    constructor() {
        super();
    }

    //#endregion

    getAll = async (request: express.Request, response: express.Response) => {
        try {
            const record = await this._service.allFormTemplates();
            if (record === null) {
                ErrorHandler.throwInternalServerError('Unable to add Form!', error);
            }
            const message = 'Form template added successfully!';
            return ResponseHandler.success(request, response, message, 201, record);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    }

    create = async (request: express.Request, response: express.Response) => {
        try {
            // await this.authorize('Form.Create', request, response);
            // const model = await this.createTypeModel(request);
            let model: FormTemplateCreateModel = await this._validator.validateCreateRequest(request);
            const record = await this._service.create(model);
            if (record === null) {
                ErrorHandler.throwInternalServerError('Unable to add Form!', error);
            }
            const message = 'Form added successfully!';
            return ResponseHandler.success(request, response, message, 201, record);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    getById = async (request: express.Request, response: express.Response) => {
        try {
            // await this.authorize('Form.GetById', request, response);
            var id: uuid = await this._validator.validateParamAsUUID(request, 'id');
            const record = await this._service.getById(id);
            const message = 'Form retrieved successfully!';
            return ResponseHandler.success(request, response, message, 200, record);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    update = async (request: express.Request, response: express.Response) => {
        try {
            // await this.authorize('Form.Update', request, response);
            const id = await this._validator.validateParamAsUUID(request, 'id');
            var model: FormTemplateUpdateModel = await this._validator.validateUpdateRequest(request);
            const updatedRecord = await this._service.update(id, model);
            const message = 'Form updated successfully!';
            ResponseHandler.success(request, response, message, 200, updatedRecord);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };

    delete = async (request: express.Request, response: express.Response): Promise<void> => {
        try {
            // await this.authorize('Form.Delete', request, response);
            var id: uuid = await this._validator.validateParamAsUUID(request, 'id');
            const result = await this._service.delete(id);
            const message = 'Form deleted successfully!';
            ResponseHandler.success(request, response, message, 200, result);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };
    submissions = async (request: express.Request, response: express.Response) => {
        try {
            // let id = request.params.id;
            // await this.authorize('Form.GetById', request, response);
            var id: uuid = await this._validator.validateParamAsUUID(request, 'id');
            const record = await this._service.submissions(id);
            const message = 'Form retrieved successfully!';
            return ResponseHandler.success(request, response, message, 200, record);
        } catch (error) {
            ResponseHandler.handleError(request, response, error);
        }
    };



}

