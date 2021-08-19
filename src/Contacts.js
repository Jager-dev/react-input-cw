import React, {useState} from 'react';
import users from './users'

const Contacts = () => {
  const [people, setPeople] = useState(users)
  return (
    <div>
      {
          people.map(el =>
            <div key={el.id}>
              {el.name}
            </div>
          )
      }
    </div>
  );
};

export default Contacts;