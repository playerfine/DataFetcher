import DataFetcherCache from "./DataFetcherCache"

class DataFetcher {
  dataFetcherCache: DataFetcherCache;

  constructor() {
    this.dataFetcherCache = new DataFetcherCache();
  }
}

export default DataFetcher
