using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using angular9.api.Models;
using Microsoft.AspNetCore.Http;
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

        // POST
        [HttpPost("adduser")]
        public ActionResult Adduser([FromBody] UserViewModel user)
        {
            return Ok(user);
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

        // POST imagen
        [HttpPost("image")]
        public async Task<ActionResult> PostImage(IFormFile image)
        {
            var filepath = Path.GetTempFileName();

            using (var stream = new FileStream(filepath, FileMode.Create))
            {
                await image.CopyToAsync(stream);
            }

            return Ok(image);
        }

    }
}
