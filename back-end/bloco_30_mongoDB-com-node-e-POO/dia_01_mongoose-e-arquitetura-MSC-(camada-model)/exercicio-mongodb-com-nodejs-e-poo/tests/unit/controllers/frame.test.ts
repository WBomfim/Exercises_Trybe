import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { frameMock, frameMockWithId, frameMockAll } from '../../mocks/frameMock';
import FrameController from '../../../src/controllers/Frame';
import FrameService from '../../../src/services/Frame';
import FrameModel from '../../../src/models/Frame';

describe('Frame Controller', () => {
  const frameModel = new FrameModel()
  const frameService = new FrameService(frameModel);
  const frameController = new FrameController(frameService);
  const req = {} as Request; 
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => sinon.restore());

  describe('Create Frame', () => {
    it('Success', async () => {
      sinon.stub(frameService, 'create').resolves(frameMock);
      req.body = frameMock;
      await frameController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock)).to.be.true;
    });
  });

  describe('ReadOne Frame', () => {
    it('Success', async () => {
      sinon.stub(frameService, 'readOne').resolves(frameMock);
      req.params = { id: frameMockWithId._id };
      await frameController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock)).to.be.true;
    });
  });

  describe('Read Frame', () => {
    it('Success', async () => {
      sinon.stub(frameService, 'readAll').resolves(frameMockAll);
      await frameController.readAll(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMockAll)).to.be.true;
    });
  });
});
