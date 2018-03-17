using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EPS.UI.Portal.Models
{
    public class CityModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int ProvinceId { get; set; }

        public ProvinceModel Province { get; set; }
    }
}