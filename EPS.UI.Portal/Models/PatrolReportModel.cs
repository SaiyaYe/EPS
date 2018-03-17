using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EPS.UI.Portal.Models
{
    public class PatrolReportModel
    {
        public int Id { get; set; }

        public int DefectTypeId { get; set; }

        public string DefectCode { get; set; }

        public string DefectType { get; set; }

        public int PatrolRouteId { get; set; }

        public string PatrolRouteName { get; set; }

        public int PatrolPointId { get; set; }

        public string PatrolPointNumber { get; set; }

        public DateTime ReportTime { get; set; }

        public int ReportEmployeeId { get; set; }

        public EmployeeModel Employee { get; set; }
    }
}