//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace KShop.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Menus
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string URL { get; set; }
        public Nullable<int> DisplayOrder { get; set; }
        public int GroupID { get; set; }
        public string Target { get; set; }
        public bool Status { get; set; }
    
        public virtual MenuGroups MenuGroups { get; set; }
    }
}