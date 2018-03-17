﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EPS.UI.Portal.Models
{
    public class PatrolPointModel
    {
        public int Id { get; set; }

        public string PoleTowerNumber { get; set; }

        public int PatrolPointTypeId { get; set; }

        public DictionaryModel PatrolPointType { get; set; }

        public double Longitude { get; set; }

        public double Latitude { get; set; }

        public DateTime? CreateTime { get; set; }

        public int CountyId { get; set; }

        public CountyModel County { get; set; }

    }
}