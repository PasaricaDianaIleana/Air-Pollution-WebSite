using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaveWorldProject.Models
{
    public class emissionChart
    {
        public int Id { get; set; }
        public int An { get; set; }
        public string Source { get; set; }
        public float Valoare { get; set; }
        public string Poluant { get; set; }
    }
}
