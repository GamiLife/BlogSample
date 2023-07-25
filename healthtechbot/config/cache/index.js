const NodeCache = require('node-cache');

class SingletonCache {
  static instance;
  static cache;

  static init() {
    if (SingletonCache.client) {
      return null;
    }

    try {
      const cache = new NodeCache({ deleteOnExpire: false });
      SingletonCache.cache = cache;
    } catch (error) {
      throw new Error(error);
    }
  }

  constructor() {}
}

function cache() {
  SingletonCache.init();

  const store = SingletonCache.cache;
  return store;
}

module.exports = {
  cache,
};
