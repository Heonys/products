import { useEffect, useState } from 'react';

type Props<T> = {
  queryKey: string | any[];
  queryFn: (...args: any[]) => Promise<T>;
};

const queryCache = new Map();

export function useQuery<T>({ queryKey, queryFn }: Props<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const cacheKey = JSON.stringify(queryKey);

  useEffect(() => {
    const fetchData = async () => {
      if (queryCache.has(cacheKey)) {
        setData(queryCache.get(cacheKey));
        return;
      }
      setIsLoading(true);
      try {
        const response = await queryFn();
        setData(response);
        queryCache.set(cacheKey, response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cacheKey]);

  return { data, isLoading, error };
}
