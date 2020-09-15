//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HomeLoan.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class LoanAccount
    {
        public int AccountNumber { get; set; }
        public string AppID { get; set; }
        public double Balance { get; set; }
        public double PrincipleAmount { get; set; }
        public System.DateTime EMIStartDate { get; set; }
        public System.DateTime EMIEndDate { get; set; }
        public System.DateTime EMINextDate { get; set; }
        public double EMI_Installment { get; set; }
        public string AdminID { get; set; }
        public int TenureRemaining { get; set; }
    
        public virtual Admin Admin { get; set; }
        public virtual CustomerApplication CustomerApplication { get; set; }
    }
}
