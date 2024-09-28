// src/hooks/useFetch.ts
import { useState, useEffect } from 'react';
import { fetchByCache } from './fetchByCache';

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController(); // AbortController 생성
    const { signal } = controller;

    async function fetchData() {
      try {
        setLoading(true);
        const result = await fetchByCache(url);

        // 요청이 중단되지 않았을 경우에만 상태 업데이트
        if (!signal.aborted) {
          setData(result);
        }
      } catch (err) {
        // 요청이 중단되지 않았을 경우에만 에러 업데이트
        if (!signal.aborted) {
          setError(err as Error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // 컴포넌트가 언마운트되면 요청을 중단 (clean up)
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
