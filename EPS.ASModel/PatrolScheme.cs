using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.ASModel
{
    public class PatrolScheme
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public int EmployeeId { get; set; }
        public int PatrolRouteId { get; set; }
        public System.DateTime SchemeDate { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime EndDate { get; set; }
        public bool IsCompleted { get; set; }
        public string Remark { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual PatrolRoute PatrolRoute { get; set; }
    }
}
