import { useParams } from 'react-router-dom';

import useFetch from '@hooks/useFetch';

type TParam = {
  recordId: string;
};

const Record = () => {
  const { recordId } = useParams<keyof TParam>();
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${recordId}`, {});

  if (error) return <>{error} 💀</>;
  if (loading) return <div>loading...</div>;
  return <>{JSON.stringify(data, null, 2)}</>;
};

export default Record;
