using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EPS.UI.Portal.Models
{
    public class AgiculturalRagionalStatisticModel
    {
        public int ProvinceId { get; set; }

        public string ProvinceName { get; set; }

        public double ArableLandArea { get; set; }

        public double FertilizerQuantity { get; set; }

        public double PotashFertilizerQuantity { get; set; }

        public double TotalGrainOutput { get; set; }

        public double CattleCount { get; set; }

        public double PigCount { get; set; }

        public double SheepCount { get; set; }

        public double PoultryCount { get; set; }

        public int Year { get; set; }
    }
}