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
    [Route("api/ApiData")]
    public class ApiDataController : Controller
    {
        private readonly ApiContext _ctx;

        public ApiDataController(ApiContext ctx)
        {
            _ctx = ctx;
        }
        [HttpGet]
        [Route("StationData")]
        public IActionResult GetData()
        {
            var data = _ctx.ApiData.OrderBy(c => c.Id);
                return Ok(data);
        }
        [HttpPost]
        public IActionResult AddData([FromBody] DataStations data)
        {
            if (!ModelState.IsValid)
            {
                //return 400 response
                return BadRequest(ModelState);
            }
            //search if exist value for a polluant on specific date from a station
            var values = _ctx.ApiData.FirstOrDefault(x => x.Day== data.Day && x.poluant ==data.poluant && x.Statie == data.Statie);

            if (values != null)
            {

                 
                return Json(new { status = "error", message = "error creating customer" });

            }
            else
            {

                _ctx.ApiData.Add(data);
                _ctx.SaveChanges();
                return Json(data);
            }
        }
    }
}
