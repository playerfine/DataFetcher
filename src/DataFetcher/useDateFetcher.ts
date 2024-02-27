import { useCallback, useEffect, useState } from "react";
import { useDataFetcherClient } from "./DataFetcherProvider";

type Options<T> = {
  id: string;
  dataFn: () => Promise<T>;
}

const useDataFetcher = <T>(options: Options<T>) => {
  const [data, setData] = useState();
  const { id, dataFn } = options;
  const client = useDataFetcherClient();

  const updateData = useCallback(() => {
    setData(client?.dataFetcherCache.get(id));
  }, [client?.dataFetcherCache, id])

  useEffect(() => {
    client?.dataFetcherCache.set(id, false, (updateData as any));
  }, [])


  useEffect(() => {
    (async () => {
      const data = await dataFn();
      client?.dataFetcherCache.set(id, data, (updateData as any));
    })()
  }, [client?.dataFetcherCache, dataFn, id, updateData])

  return { data }

}

export default useDataFetcher;
