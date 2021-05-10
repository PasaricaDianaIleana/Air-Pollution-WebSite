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
    [Route("api/SaveWorld")]
    public class SaveWorldController : Controller
    {
        private  ISaveWorld _ctx;
        public SaveWorldController(ISaveWorld ctx)
        {
            _ctx = ctx;
        }

        public IActionResult Index()
        {

            return Ok(_ctx.getData().OrderBy(o => o.Poluant));
        }
        [HttpGet]
        [Route("HealthChart")]
        public  IActionResult HealthChartData()
        {
            return Ok(_ctx.GetHealthChartData().OrderBy(c => c.Id));
        }

        [HttpGet]
        [Route("GlobalWarming")]
        public IActionResult GetData()
        {
            return Ok(_ctx.GetGlobalWarmingData().OrderBy(d=>d.An));
        }
        [HttpGet]
        [Route("Transport")]
        public IActionResult GetTransportEmisson()
        {
            return Ok(_ctx.GetColumnChartData().OrderBy(a => a.Source)) ;
        }

        [Route("MapData")]
        public IActionResult GetMapData()
        {
            return Ok(_ctx.getMapData().OrderBy(m=>m.Id));
        }
        [Route("evoloution")]
        public IActionResult GetChartData()
        {
            return Ok(_ctx.getChartData().OrderBy(e=>e.An));
        }

    }
}