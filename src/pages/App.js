import React, { useState } from "react";
import gitLogo from "../images/github.png";
import Input from '../components/Input'; 
import Button from '../components/Button'
import ItemRepo from '../components/ItemRepo'; 
import { api } from '../services/api';


import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id == data.id)


     if(!isExist) 
      setRepos(prev => [...prev, data]);
      setCurrentRepo('')
      return
    } else {
      alert("Repositório não encontrado")
    }

  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Github logo" />
      <Input value={currentRepo} onChange={(e) => currentRepo (e.target.value)}/>
      <Button onClick={handleSearchRepo}></Button>
      {repos.map(repo => <itemRepo repo={repo}></itemRepo> )}
      <ItemRepo /> 
    </Container>
  );
}

export default App;
