using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaveWorldProject.Models
{

    public interface ISaveWorld
    {
    IEnumerable<EmissionsBySource> getData();
        IEnumerable<HealthChart> GetHealthChartData();
        IEnumerable<IncalzireaGlobala> GetGlobalWarmingData();
        IEnumerable<columnChart> GetColumnChartData();
        IEnumerable<MapChart> getMapData();
        IEnumerable<evolutionChart> getChartData();
    }
}
