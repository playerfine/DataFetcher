import useDataFetcher from "../DataFetcher/useDateFetcher";

const dataFn = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve(true);
    }, 1000)
  });
}


const Navbar = () => {
  const { data } = useDataFetcher({ id: "test", dataFn: dataFn });

  return <>
    <div>{data?.toString()}</div>
  </>;
}

export default Navbar;
