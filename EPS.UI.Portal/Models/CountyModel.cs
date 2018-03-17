using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EPS.UI.Portal.Models
{
    public class CountyModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int CityId { get; set; }

        public CityModel City { get; set; }
    }
}