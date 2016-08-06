import * as typeMoq from "typemoq";
import * as chai from "chai";
import * as contactService from "../ContactService";
import * as contactRepository from "../../adapters/ContactRepository";

describe("ContactService", () => {
    var subject: contactService.ContactService;
    var mockRepository: typeMoq.Mock<contactRepository.ContactRepository>;

    beforeEach(function () {
      mockRepository = typeMoq.Mock.ofType(contactRepository.ContactRepository);
      subject = new contactService.ContactService(mockRepository.object);
    });

    describe("#loadAllContacts", () => {
      it("should call loadAllContacts on the repository", () => {
        subject.loadAllContacts();
        mockRepository.verify(x => x.loadAllContacts(), typeMoq.Times.once());
      });

      it("should return value received from the repository", () => {
        var someContacts = [{ _id: 5, _firstName: "foo", _lastName: "bar", _star: true },
                            { _id: 5, _firstName: "foo2", _lastName: "bar2", _star: false }];

        mockRepository.setup(x => x.loadAllContacts()).returns(() => someContacts);

        chai.expect(subject.loadAllContacts()).to.deep.eq(someContacts);
      });
    });
});
