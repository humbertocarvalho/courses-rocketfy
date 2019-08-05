import React, { useState } from 'react';
import List from '../List';
import { Container } from './styles';

import BoardContext from './context';
import { loadLists } from '../../services/api';

const data = loadLists();
export default function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, from, to) {
    console.log(from, to);
  }
  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map(list => (
          <List key={list.title} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}
