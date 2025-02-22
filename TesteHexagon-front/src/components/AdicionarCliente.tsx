import axios from "axios";
import { useState} from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export function AdicionarCliente(){
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(NaN)
    const [estado_Civil, setEstado_Civil] = useState('')
    const [cpf, setCpf] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    async function AdicionarCliente(){
        try{
            await axios.post('http://localhost:5130/api/Clientes', {
                nome: nome,
                idade: idade,
                estado_Civil: estado_Civil,
                cpf: cpf,
                cidade: cidade,
                estado: estado
            })
            location.reload()
        }catch(err){
            
        }
    }

    return(
        <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
                <Label>Nome</Label>
                <Input value={nome} onChange={e => setNome(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Idade</Label>
                <Input type="number" value={idade} onChange={e => setIdade(Number(e.target.value))}/>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Estado Civil</Label>
                <Input value={estado_Civil} onChange={e => setEstado_Civil(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>CPF</Label>
                <Input value={cpf} onChange={e => setCpf(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Cidade</Label>
                <Input value={cidade} onChange={e => setCidade(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Estado</Label>
                <Input value={estado} onChange={e => setEstado(e.target.value)}/>
            </div>
            <Button onClick={AdicionarCliente}>Adicionar Cliente</Button>
        </div>
    )
}