import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo() { // Correção: Nomes de componentes começam com maiúscula
  return (
    <ItemContainer>
      <h3>Gabriel</h3>
      <p></p>
      <a href="#">Ver repositório</a>
      <a href="#" className="remove">Remover</a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo; // Correção: Exportação consistente
