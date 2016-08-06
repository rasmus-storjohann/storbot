"use strict";

import { IContactRepository } from "../businessInterfaces/IContactRepository";
import { Contact } from "../businessInterfaces/Contact";

export class ContactService {
  private _repository: IContactRepository;

  constructor(repository: IContactRepository) {
    this._repository = repository;
  }

  saveContact(contact: Contact) {
    return this._repository.saveContact(contact);
  }

  loadAllContacts()
  {
    return this._repository.loadAllContacts();
  }

  loadContact(id: number) {
    return this._repository.loadContact(id);
  }
}
