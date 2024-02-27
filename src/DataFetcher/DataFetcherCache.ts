
type Query = {
  id: string;
  data: unknown;
  listeners: Array<() => void>;
}

class DataFetcherCache {
  queries: Map<string, Query>;

  constructor() {
    this.queries = new Map();
  }

  set(id: string, data: unknown, onChange: Query['listeners'][0]) {
    if (this.queries.has(id)) {
      this.update(id, data, onChange);
      return
    }

    const listeners: Query['listeners'] = [onChange];
    this.queries.set(id, { id, data, listeners });
    return { data }
  }

  get(id: string) {
    return this.queries.get(id)?.data
  }

  remove(id: string) {
    return this.queries.delete(id)
  }

  async update(id: string, data: unknown, onChange: Query['listeners'][0]) {
    const currentQuery = this.queries.get(id);
    currentQuery?.listeners.push(onChange);

    if (currentQuery) {
      this.queries.set(id, { ...currentQuery, data })
    }
    this.notifyListeners(id);
  }

  notifyListeners(id: string) {
    const query = this.queries.get(id)
    if (query) {
      query.listeners.forEach((fn) => {
        fn();
      })
    }
  }
}


export default DataFetcherCache;
