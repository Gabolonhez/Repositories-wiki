import React from 'react';
import { ItemContainer } from './styles';


function ItemRepo({repo, handleRemoveRepo}) {
  
  const handleRemove = () => {
      handleRemoveRepo(repo.id)
    }

  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">Acessar repositório</a>
      <a href="#" className="remove" rel='noreferrer' onClick={handleRemove}>Remover</a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
