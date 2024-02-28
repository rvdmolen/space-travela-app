import { EventDefinitions } from '../model/event-definitions.js';

class TabSelectedEvent extends CustomEvent {

  constructor(detail = {}, bubbles = true, composed = true) {
    super(EventDefinitions.TAB_SELECTED, {
      detail,
      bubbles,
      composed
    });
  }
}

export { TabSelectedEvent };
