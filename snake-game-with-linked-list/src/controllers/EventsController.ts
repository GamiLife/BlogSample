import { ReactiveController, ReactiveControllerHost } from 'lit';

export class EventsController implements ReactiveController {
  host: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
  }

  hostConnected(): void {}
  hostDisconnected(): void {}
}
