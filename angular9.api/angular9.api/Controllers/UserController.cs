using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angular9.api.Models;
using Microsoft.AspNetCore.Mvc;

namespace angular9.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            return Ok(new { 
                Nombre = "Fabio",
                Apellido = "Colan",
                Email = "fcolanwong@gmail.com",
            });
        }

        // GET api/values/5
        [HttpPost("adduser")]
        public ActionResult Adduser([FromBody] UserViewModel user)
        {
            return Ok();
        }

        // GET api/values/5
        [HttpGet("users")]
        public ActionResult GetUsers()
        {
            List<UserViewModel> users = new List<UserViewModel>();

            users.Add(new UserViewModel { Nombre = "Javier", Apellido = "Jota", Email = "javier@gmail.com", });
            users.Add(new UserViewModel { Nombre = "Juan", Apellido = "Khan", Email = "juan@gmail.com", });
            users.Add(new UserViewModel { Nombre = "Dalia", Apellido = "Urbina", Email = "dalia@gmail.com", });
            users.Add(new UserViewModel { Nombre = "Isabella", Apellido = "Colan", Email = "isabella@gmail.com", });
            users.Add(new UserViewModel { Nombre = "Sergio", Apellido = "Zapata", Email = "sergio@gmail.com", });
            return Ok(users);
        }

    }
}
