import React from 'react';
import { User } from '../../types';

type Props = {
  data?: User | Record<string, any>;
};

const UserDisplay = ({ data }: Props): JSX.Element | null => {
  if (!data) return null;
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{data.name}</h3>
      <p>age: {data.age} years</p>
      <p>ID: {data.id}</p>
      <h3>Hobbies</h3>
      <ul>
        {data.hobbies.map((hobby: string) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDisplay;
