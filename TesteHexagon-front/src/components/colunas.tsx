"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { ConteudoPopEditar } from "./ConteudoPopEditar"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export type Clientes = {
    id: number
    nome: string
    idade: number
    estado_Civil: string
    cpf: string
    cidade: string
    estado: string
}

async function deleteCliente(id: number) {
  try {
  await axios.delete(`http://localhost:5130/api/Clientes/${id}`)
  location.reload()
  }catch(err){
    
  }
}

export const columns: ColumnDef<Clientes>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "idade",
    header: "Idade",
  },
  {
    accessorKey: "estado_Civil",
    header: "Estado Civil",
  },
  {
    accessorKey: "cpf",
    header: "CPF",
  },
  {
    accessorKey: "cidade",
    header: "Cidade",
  },
  {
    accessorKey: "estado",
    header: "Estado",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const cliente = row.original
 
      return (
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <Popover>
            <PopoverTrigger>Editar Cliente</PopoverTrigger>
            <PopoverContent className="w-48 p-2 text-sm" 
        align="start"
        side="right" 
        sideOffset={8}>
              <ConteudoPopEditar cliente={cliente}/>
            </PopoverContent>
            </Popover>
            <DropdownMenuSeparator />
              <DialogTrigger >Deletar Cliente</DialogTrigger>
              <DialogContent>
                <DialogHeader/>
                  <DialogTitle>Deletar o Cliente</DialogTitle>
                <DialogDescription>
                  Você tem certeza que deseja deletar?
                </DialogDescription>
                  <Button variant="outline">Cancelar</Button>
                  <Button onClick={() => deleteCliente(cliente.id)}>Deletar</Button>
              </DialogContent>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dialog>
      )
    },
  },
]
