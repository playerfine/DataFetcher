import useDataFetcher from "../DataFetcher/useDateFetcher";

const dataFn2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(false);
    }, 2000)
  });
}

const Content = () => {
  const { data } = useDataFetcher({ id: "test2", dataFn: dataFn2 });
  return <div>{data?.toString()}</div>;
}

export default Content;
