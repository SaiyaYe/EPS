using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EPS.UI.Portal.Models
{
    public class DepartmentModel
    {
       
        public int Id { get; set; }
        public int Number { get; set; }
       
        public string Name { get; set; }
        
        public int CompanyId { get; set; }
        
        public string CompanyName { get; set; }
    }
}