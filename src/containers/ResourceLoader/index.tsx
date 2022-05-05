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
  resourceURL: string | null;
  resourceName: string;
};

const ResourceLoader = ({
  children,
  resourceURL,
  resourceName,
}: Props): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<null | Record<string, any>>(null);

  useEffect(() => {
    if (!resourceURL) {
      setData(null);
      setError(null);
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(resourceURL);
        setData(data[resourceName] || data);
        setLoading(false);
      } catch (error) {
        const { response } = error as AxiosError<any, any>;
        const message =
          response?.data.error || `Failed ot fetch resource at ${resourceURL}`;
        setError(message);
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourceURL]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;
  if (!data) return <NoData />;

  return (
    <>
      {React.Children.map(children, (currentChild) => {
        if (React.isValidElement(currentChild)) {
          return React.cloneElement(currentChild, {
            [resourceName]: data,
          });
        }
        return currentChild;
      })}
    </>
  );
};

export default ResourceLoader;
