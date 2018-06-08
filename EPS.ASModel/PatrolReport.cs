using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.ASModel
{
    public class PatrolReport
    {
        public int Id { get; set; }
        public int PatrolPointId { get; set; }
        public int PatrolRouteId { get; set; }
        public System.DateTime ReportTime { get; set; }
        public int ReportEmployeeId { get; set; }
        public int DefectTypeId { get; set; }
        public int DefectLevelId { get; set; }

        public virtual PatrolPoint PatrolPoint { get; set; }
        public virtual PatrolRoute PatrolRoute { get; set; }
        public virtual Employee ReportEmployee { get; set; }
        public virtual Dictionary DefectType { get; set; }
        public virtual Dictionary DefectLevel { get; set; }
    }
}
