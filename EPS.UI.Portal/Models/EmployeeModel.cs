using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EPS.UI.Portal.Models
{
    public class EmployeeModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Number { get; set; }

        public int CompanyId { get; set; }

        public string CompanyName { get; set; }

        public int DepartmentId { get; set; }

        public string DepartmentName { get; set; }
        
        public int GroupId { get; set; }

        public string GroupName { get; set; }

        

    }
}