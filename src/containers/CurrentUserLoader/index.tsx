import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios, { AxiosError } from 'axios';

const Centered = styled.p`
  justify-content: center;
  font-weight: 600;
`;
const Loader = () => <Centered>Loading...</Centered>;
const Error = ({ message }: { message: string }) => (
  <Centered>{message}</Centered>
);
const NoData = () => <Centered>No data</Centered>;

type Props = {
  children: React.ReactNode;
  userId: number;
};

const CurrentUserLoader = ({ children, userId }: Props): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<null | Record<string, any>>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get<{ user: Record<string, any> }>(
          `/api/users/${userId}`,
        );
        setData(data.user);
        setLoading(false);
      } catch (error) {
        const { response } = error as AxiosError<any, any>;
        const message = response?.data.error || 'Failed ot fetch users';
        setError(message);
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;
  if (!data) return <NoData />;

  return (
    <>
      {React.Children.map(children, (currentChild) => {
        if (React.isValidElement(currentChild)) {
          return React.cloneElement(currentChild, {
            data,
          });
        }
      })}
    </>
  );
};

export default CurrentUserLoader;
