const mock = () => {
  let storage: any = {};

  return {
    getItem: (key: string) => ((key in storage) ? storage[key] : null),
    setItem: (key: string, value: any) => (storage[key] = value || ''),
    removeItem: (key: string) => delete storage[key],
    clear: () => (storage = {})
  };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
