using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace angular9.api.Models
{
    public class UserViewModel
    {
        public string Nombre { get;  set; }
        public string Apellido { get; set; }
        public string Email { get; set; }
        public DateTime? Date { get; set; }
    }
}
