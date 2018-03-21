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

        public DictionaryModel DefectType { get; set; }

        public int DefectLevelId { get; set; }

        public DictionaryModel DefectLevel { get; set; }

        public int PatrolRouteId { get; set; }

        public string PatrolRouteName { get; set; }

        public int PatrolPointId { get; set; }

        public PatrolPointModel PatrolPoint { get; set; }

        public DateTime ReportTime { get; set; }

        public int ReportEmployeeId { get; set; }

        public EmployeeModel ReportEmployee { get; set; }
    }
}