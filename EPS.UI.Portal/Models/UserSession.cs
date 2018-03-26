using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EPS.UI.Portal.Models
{
    public class UserSession
    {
        public int EmployeeId { get; set; }

        public string EmployeeName { get; set; }

        public int CompanyId { get; set; }

        public int DepartmentId { get; set; }

        public int GroupId { get; set; }

        public bool IsManager { get; set; }

        public string PictureUrl { get; set; }
    }
}