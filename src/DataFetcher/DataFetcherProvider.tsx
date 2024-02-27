import React from "react";
import DataFetcher from "./DataFetcher";

const context = React.createContext<DataFetcher | undefined>(undefined);

interface Props {
  dataFetcher: DataFetcher;
  children: React.ReactNode;
}

export const useDataFetcherClient = () => {
  return React.useContext(context)
}


const DataFetcherProvider: React.FC<Props> = ({ dataFetcher, children }) => {
  return (
    <context.Provider value={dataFetcher}>
      {children}
    </context.Provider>
  )
}

export default DataFetcherProvider
