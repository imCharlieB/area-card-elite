import { LitElement } from "lit";

export interface SubscribeMixin {
  hassSubscribe(): Array<() => void>;
}

export function SubscribeMixin<T extends new (...args: any[]) => LitElement>(
  superClass: T
) {
  class SubscribeClass extends superClass {
    private __subscriptions?: Array<() => void>;

    public connectedCallback() {
      super.connectedCallback();
      this.__subscriptions = [];
      
      if (this.hassSubscribe) {
        this.__subscriptions = this.hassSubscribe();
      }
    }

    public disconnectedCallback() {
      super.disconnectedCallback();
      
      if (this.__subscriptions) {
        this.__subscriptions.forEach((unsub) => unsub());
        this.__subscriptions = undefined;
      }
    }

    protected hassSubscribe?(): Array<() => void>;
  }

  return SubscribeClass as T & (new (...args: any[]) => SubscribeMixin);
}