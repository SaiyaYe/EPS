//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace EPS.Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string PictureUrl { get; set; }
        public System.DateTime CreateTime { get; set; }
        public bool Available { get; set; }
        public int EmployeeId { get; set; }
    
        public virtual Employee Employee { get; set; }
    }
}
