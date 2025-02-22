import { Label } from "./ui/label";
import { Input } from "./ui/input";
import axios from 'axios';
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Clientes } from "./colunas";
interface ConteudoPopEditarProps {
    cliente: Clientes;
  }
  
  export const ConteudoPopEditar: React.FC<ConteudoPopEditarProps> = ({ cliente }) => {
    const [nomehere, setNome] = useState('')
    const [idadehere, setIdade] = useState(0)
    const [estado_Civilhere, setEstado_Civil] = useState('')
    const [cpfhere, setCpf] = useState('')
    const [cidadehere, setCidade] = useState('')
    const [estadohere, setEstado] = useState('')



    async function setAll(){
      setNome(cliente.nome)
      setIdade(cliente.idade)
      setEstado_Civil(cliente.estado_Civil)
      setCpf(cliente.cpf)
      setCidade(cliente.cidade)
      setEstado(cliente.estado)
    }
    
    useEffect(() => {
      setAll()
    }, [])

    async function AtualizarCliente(){
        try{
            await axios.put(`http://localhost:5130/api/Clientes/${cliente.id}`, {
                id: cliente.id,
                nome: nomehere,
                idade: idadehere,
                estado_Civil: estado_Civilhere,
                cpf: cpfhere,
                cidade: cidadehere,
                estado: estadohere
            })
            location.reload()
        }catch(err){
            
        }
    }

    return (
        <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
            <Label>Nome</Label>
            <Input value={nomehere} onChange={e =>setNome(e.target.value)} />
        </div>
        <div className="flex flex-col space-y-2">
            <Label>Idade</Label>
            <Input type="number" value={idadehere} onChange={e => setIdade(Number(e.target.value))}/>
        </div>
        <div className="flex flex-col space-y-2">
            <Label>Estado Civil</Label>
            <Input value={estado_Civilhere} onChange={e=> setEstado_Civil(e.target.value)} />
        </div>
        <div className="flex flex-col space-y-2">
            <Label>CPF</Label>
            <Input value={cpfhere} onChange={e=> setCpf(e.target.value)}/>
        </div>
        <div className="flex flex-col space-y-2">
            <Label>Cidade</Label>
            <Input value={cidadehere} onChange={e=> setCidade(e.target.value)}/>
        </div>
        <div className="flex flex-col space-y-2">
            <Label>Estado</Label>
            <Input value={estadohere} onChange={e=> setEstado(e.target.value)} />
        </div>
        <Button onClick={() => AtualizarCliente()}>Atualizar</Button>
        </div>
    );
}