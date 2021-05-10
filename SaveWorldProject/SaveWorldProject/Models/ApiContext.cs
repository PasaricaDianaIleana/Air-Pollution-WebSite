using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaveWorldProject.Models
{
    public class ApiContext : DbContext
    {


        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }
       
        public DbSet<DataStations> ApiData { get; set; }
        public DbSet<Emission> emissions { get; set; }
        public DbSet<IncalzireaGlobala> incalzireaGlobala { get; set; }
        public DbSet<EmissionsBySource> emissionsBySources { get; set; }
        public DbSet<columnChart> columnCharts { get; set; }
        public DbSet<MapChart> MapsChart{ get; set; }
        public DbSet<PollutionMap2> pollutionMap2s { get; set; }
        public DbSet<ForestMap> forestMaps { get; set; }
        public DbSet<continentsMap> continents { get; set; }
        public DbSet<emissionChart> emissionsChart { get; set; }
        public DbSet<evolutionChart>  evolutionChart { get; set; }
        public DbSet<HealthChart> healthCharts { get; set; }
    }
}
