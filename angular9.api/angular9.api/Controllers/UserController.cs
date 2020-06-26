using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public ActionResult Adduser([FromBody] Models.UserViewModel user)
        {
            return Ok();
        }

    }
}
