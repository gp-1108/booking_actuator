class InvalidDateException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidDateException";
  }
}

class SlotNotAvailableException extends Error {
  constructor(message) {
    super(message);
    this.name = "SlotNotAvailableException";
  }
}

class InvalidLoginException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidLoginException";
  }
}

class NoUserException extends Error {
  constructor(message) {
    super(message);
    this.name = "NoUserException";
  }
}

module.exports = {
  InvalidDateException,
  SlotNotAvailableException,
  InvalidLoginException,
  NoUserException
};
