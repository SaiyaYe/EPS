using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.ComponentModel;



namespace EPS.UI.Portal.Models
{


   
    public class EmployeeModel
    {


       
        public int Id { get; set; }

        public string Name { get; set; }

        public int Number { get; set; }

        public int CompanyId { get; set; }

        public string CompanyName { get; set; }

        public int DepartmentId { get; set; }

        public string DepartmentName { get; set; }

        public int GroupId { get; set; }

        public string GroupName { get; set; }



    }
}