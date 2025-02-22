using System.ComponentModel.DataAnnotations;

namespace TesteHexagon.Models
{
    public class Cliente
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; } = null!;
        public uint Idade { get; set; } = 0;
        public string Estado_Civil { get; set; } = null!;
        public string CPF { get; set; } = null!; //no futuro cpfs podem ter letras
        public string Cidade { get; set; } = null!;
        public string Estado { get; set; }  = null!;

        }
}
