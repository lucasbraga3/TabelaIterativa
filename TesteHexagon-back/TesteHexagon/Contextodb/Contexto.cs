using Microsoft.EntityFrameworkCore;
using TesteHexagon.Models;
using System;
namespace TesteHexagon.Contextodb
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto>options) : base(options)
        {
        }

        public DbSet<Cliente> Clientes { get; set; }
        
    }
}
