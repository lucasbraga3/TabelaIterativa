import { useState, useEffect } from 'react'
import './App.css'
import { Clientes, columns } from './components/colunas'
import axios from 'axios';
import { DataTable } from './components/TestTable'
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { AdicionarCliente } from './components/AdicionarCliente';

function App() {
  const [dados, setDados] = useState<Clientes[]>([])
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    getData()
  }, [])

  async function getData(){
    try{
      const response = await axios.get('http://localhost:5130/api/Clientes')
      setDados(response.data)
    }
    catch(err){
      //console.log(err)
    }
  }

  return (
    <>
      <DataTable columns={columns} data={dados} />
      <Label>Adicionar Cliente? </Label>
        <input type="checkbox" className='' checked={checked} onChange={() => setChecked(!checked)}/>

      {checked ? (<AdicionarCliente/>): (<></>)}
    </>
  )
}

export default App
