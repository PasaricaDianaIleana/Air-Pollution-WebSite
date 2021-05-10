using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SaveWorldProject.Models;

namespace SaveWorldProject.Controllers
{
    [Produces("application/json")]
    [Route("api/Map2")]
    public class Map2Controller : Controller
    {
        private readonly ApiContext _ctx;

        public Map2Controller(ApiContext ctx)
        {
            _ctx = ctx;
        }
        [HttpGet]
        public IActionResult Data()
        {
            var data = _ctx.pollutionMap2s;
            return Ok(data);
        }
    }
}