import React from 'react';
import { User } from '../../types';

type Props = {
  user?: User | Record<string, any>;
};

const UserDisplay = ({ user }: Props): JSX.Element | null => {
  if (!user) return null;
  const { name, age, id, hobbies, hairColor } = user;
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{name}</h3>
      <p>age: {age} years</p>
      <p>Hair color: {hairColor}</p>
      <p>ID: {id}</p>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby: string) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDisplay;
