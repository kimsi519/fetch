// src/hooks/session-context.tsx
import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';

const SAMPLE_URL = '/session';

interface Session {
  id: number;
  name: string;
}

const SessionComponent: React.FC = () => {
  const { data, error, loading } = useFetch<Session>(SAMPLE_URL);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    if (data) {
      setSession(data);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{session ? `Logged in as ${session.name}` : 'No session'}</div>;
};

export default SessionComponent;
