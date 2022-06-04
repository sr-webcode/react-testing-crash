import useFetch from '@hooks/useFetch';

const Records = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users', {});
  if (error) return <div>Something went wrong 💀</div>;
  if (loading) return <div>loading...</div>;
  return <>{JSON.stringify(data, null, 2)}</>;
};

export default Records;
