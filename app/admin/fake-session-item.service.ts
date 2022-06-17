import { Injectable } from '@angular/core';
import { SESSIONITEMS } from './sessions';

@Injectable()
export class FakeSessionItemService {

  constructor() { }
  get() { return SESSIONITEMS; }
  add(sessionItem: any) {
    sessionItem.id = SESSIONITEMS.length + 1;
    SESSIONITEMS.push(sessionItem);
  }
  delete(sessionItem: any) {
    let index;
    index = SESSIONITEMS.indexOf(sessionItem);
    if (SESSIONITEMS.indexOf(sessionItem) >= 0) {
      SESSIONITEMS.splice(index, 1);
    }

  }
  getSession(id: number) {
    return SESSIONITEMS[id - 1];
  }




}
function getSession(id: any, number: any) {
  throw new Error('Function not implemented.');
}

function id(id: any, number: any) {
  throw new Error('Function not implemented.');
}

