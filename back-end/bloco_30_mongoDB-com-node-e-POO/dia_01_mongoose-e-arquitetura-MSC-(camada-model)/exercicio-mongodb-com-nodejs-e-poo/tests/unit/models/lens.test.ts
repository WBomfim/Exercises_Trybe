import { expect } from "chai";
import Sinon from "sinon";
import { Model }  from "mongoose";
import { lensMock, lensMockWithId, lensMockAll } from "../../mocks/lensMock";
import LensModel from "../../../src/models/Lens";

describe("Lens Model", () => {
  const lensModel = new LensModel();

  before(() => {
    Sinon.stub(Model, "create").resolves(lensMockWithId);
    Sinon.stub(Model, "findOne").resolves(lensMockWithId);
    Sinon.stub(Model, "find").resolves(lensMockAll);
    Sinon.stub(Model, "findByIdAndDelete").resolves(lensMockWithId);
  });

  after(() => Sinon.restore());

  describe("creating a lens", () => {
    it("successfully created", async () => {
      const newLens = await lensModel.create(lensMock);
      expect(newLens).to.be.deep.equal(lensMockWithId);
    });
  });

  describe("searching a lens by id", () => {
    it("successfully found", async () => {
      const lensFound = await lensModel.readOne("62cf1fc6498565d94eba52cd");
      expect(lensFound).to.be.deep.equal(lensMockWithId);
    });

    it("_id not found", async () => {
      try {
        await lensModel.readOne("123ERRADO");
      } catch (error: any) {
        expect(error.message).to.be.eq("InvalidMongoId");
      }
    });
  });

  describe("searching all lenses", () => {
    it("successfully found", async () => {
      const lensesFound = await lensModel.readAll();
      expect(lensesFound).to.be.deep.equal(lensMockAll);
    });
  });

  describe("deleting a lens", () => {
    it("successfully deleted", async () => {
      const lensDeleted = await lensModel.destroy("62cf1fc6498565d94eba52cd");
      expect(lensDeleted).to.be.deep.equal(lensMockWithId);
    });

    it("_id not found", async () => {
      try {
        await lensModel.destroy("123ERRADO");
      } catch (error: any) {
        expect(error.message).to.be.eq("InvalidMongoId");
      }
    });
  });
});
