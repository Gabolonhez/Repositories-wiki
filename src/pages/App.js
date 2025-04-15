import React, { useState } from "react";
import gitLogo from "../images/github.png";
import Input from '../components/Input'; 
import Button from '../components/Button'
import ItemRepo from '../components/ItemRepo'; 
import {api} from '../services/api';


import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id)

    if (!isExist) {
      setRepos(prev => [...prev, data]);
      setCurrentRepo('e')
      return
    } else {
      alert("Repositório não encontrado");
    }
  }
  }
  const handleRemoveRepo = (id) => {

    const newRepos = repos.filter(repo => repo.id !== id)
    setRepos(newRepos);
    
  }

  return (
    <Container>
      <img src={gitLogo} width={100} height={100} alt="Github logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}></Button>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}></ItemRepo> )}
    </Container>
  );
}

export default App;
