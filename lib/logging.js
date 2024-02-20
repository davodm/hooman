const debug = process.env.HOOMAN_DEBUG;

export const info = async (message) => {
  if (debug) {
    console.log('[info] ' + message);
  }
};

export const warn = async (message) => {
  if (debug) {
    console.warn('[warn] ' + message);
  }
};

export const error = async (message) => {
  if (debug) {
    console.error('[error] ' + message);
  }
};