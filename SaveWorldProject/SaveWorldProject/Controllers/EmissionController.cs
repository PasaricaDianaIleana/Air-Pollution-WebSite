using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SaveWorldProject.Models;

namespace SaveWorldProject.Controllers
{
    [Produces("application/json")]
    [Route("api/Emission")]
    public class EmissionController : Controller

    {
        private readonly ApiContext _ctx;

        public EmissionController(ApiContext ctx)
        {
            _ctx = ctx;
        }
        [HttpGet("ByName")]
        public IActionResult ByName()
        {
            var data = _ctx.emissions;
            var groupResult = data.GroupBy(o => o.Denumire);
            return Ok(groupResult);
        }

        [HttpGet]
        public IActionResult Emisions()
        {
            var data = _ctx.emissions.OrderBy(e=>e.Id);
            return Ok(data);
        }
      
        [HttpGet("{id}", Name = "GetEmission")]
        public IActionResult Get(int id)
        {
            var emission = _ctx.emissions.Find(id);
            return Ok(emission);
        }

        [HttpGet("ByPolluant")]
        public IActionResult ByPolluant()
        {
            var groupedResult = _ctx.emissions.GroupBy(c => c.Denumire);

            return Ok(groupedResult);
        }
       
    }

}