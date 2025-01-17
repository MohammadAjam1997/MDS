import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
    get branches(): any {
        return this._branches;
    }
    set branches(value: any) {
        this._branches = value;
    }
    get liaisonAgent(): any {
        return this._liaisonAgent;
    }
    set liaisonAgent(value: any) {
        this._liaisonAgent = value;
    }
    set returnReasones(value: any) {
        this._returnReasones = value;
    }
    get returnReasones(): any {
        return this._returnReasones;
    }
    get deliveryAgents(): any {
        return this._deliveryAgents;
    }
    set deliveryAgents(value: any) {
        this._deliveryAgents = value;
    }
    private _deliveryAgents:any
    private _returnReasones:any
    private _liaisonAgent:any
    private _branches:any
    public states:any
    public distrits:any

  constructor() { }
}
