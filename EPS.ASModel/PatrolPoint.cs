using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.ASModel
{
    public class PatrolPoint
    {
        public int Id { get; set; }
        public System.Data.Entity.Spatial.DbGeography Shape { get; set; }
        public string PoleTowerNumber { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public Nullable<System.DateTime> CreateTime { get; set; }
        public int CountyId { get; set; }
        public int PatrolPointTypeId { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PatrolReport> PatrolReport { get; set; }
        public virtual County County { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PatrolRoute> PatrolRoute { get; set; }
        public virtual Dictionary PatrolPointType { get; set; }
    }
}
