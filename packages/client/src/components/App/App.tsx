import React, { FC, useEffect, useState } from 'react';

import { Dictionary } from '@imagene/domain';

import { API_URL } from '~/config';
import { Logger, checkServerVersion } from '~/utils';
import { UserModel } from '@imagene/lib';

export const App: FC<unknown> = () => {
  const [response, setResponse] = useState<string>('NO SERVER RESPONSE');
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    async function fetchResponse(): Promise<void> {
      try {
        const res = await fetch(API_URL);
        const data = await res.text();
        setResponse(data);
      } catch (err) {
        Logger.error(err);
      }
    }

    fetchResponse().catch(err => Logger.error(err));

    async function getUsers(): Promise<void> {
      try {
        const res = await fetch(`${API_URL}/user`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        Logger.error(err);
      }
    }

    getUsers().catch(err => Logger.error(err));
  }, []);

  useEffect(() => {
    checkServerVersion().catch(err => Logger.error(err));
  }, []);

  const dictExample: Dictionary<number> = {
    first: 1,
    second: 2,
  };
  return (
    <>
      <div>
        Here we use a <code>Dictionary&lt;number&gt;</code> interface from the{' '}
        <code>@imagene/domain</code> package:
        <pre>{JSON.stringify(dictExample)}</pre>
      </div>
      <div>
        And here we get a response from the API:
        <br />
        <br />
        {response}
      </div>
      <div>
        Here are users:
        <br />
        <br />
        <ul>
          {users.map(user => (
            <li key={user.email}>
              Email: {user.email}, Name: {user.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
