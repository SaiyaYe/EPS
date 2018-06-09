using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EPS.UI.Portal.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }

        public string PictureUrl { get; set; }

        public DateTime CreateTime { get; set; }

        public bool Available { get; set; }

        public int EmployeeId { get; set; }

        public string EmployeeName { get; set; }

        public int RoleId { get; set; }

        public string RoleName { get; set; }
    }
}