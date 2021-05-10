using Microsoft.EntityFrameworkCore.Extensions.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaveWorldProject.Models
{
   
    public class ChartsData : ISaveWorld
    {
        private ApiContext _context;
        public ChartsData(ApiContext context)
        {
            _context = context;
        }

        public IEnumerable<HealthChart> GetHealthChartData()
        {
            return _context.healthCharts;
        }

     public  IEnumerable<EmissionsBySource> getData()
        {
            return _context.emissionsBySources;

        }

        public IEnumerable<IncalzireaGlobala> GetGlobalWarmingData()
        {
            return _context.incalzireaGlobala;
        }

        public IEnumerable<columnChart> GetColumnChartData()
        {
            return _context.columnCharts;
        }

        public IEnumerable<MapChart> getMapData()
        {
            return _context.MapsChart.OrderBy(m => m.Id) ;
        }

        public IEnumerable<evolutionChart> getChartData()
        {
            return _context.evolutionChart;
        }
    }
}
