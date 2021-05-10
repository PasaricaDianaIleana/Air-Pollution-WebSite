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
    [Route("api/EmissionChart")]
    public class EmissionChartController : Controller
    {
        private readonly ApiContext _ctx;

       public EmissionChartController(ApiContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public IActionResult GetData()
        {
            var data = _ctx.emissionsChart.OrderBy(s => s.Source);
            return Ok(data);
        }
    }
}