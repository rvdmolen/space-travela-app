import { EventDefinitions } from '../model/event-definitions.js';

class DotSelectedEvent extends CustomEvent {

  constructor(detail = {}, bubbles = true, composed = true) {
    super(EventDefinitions.DOT_SELECTED, {
      detail,
      bubbles,
      composed
    });
  }
}

export { DotSelectedEvent };
