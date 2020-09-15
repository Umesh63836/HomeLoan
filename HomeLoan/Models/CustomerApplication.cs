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
    using System.Runtime.Serialization;

    [DataContract]
    public partial class CustomerApplication
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CustomerApplication()
        {
            this.LoanAccounts = new HashSet<LoanAccount>();
            this.TrackStatus = new HashSet<TrackStatu>();
        }
        
        public string ApplicationID { get; set; }
        [DataMember]
        public string EmailID { get; set; }
        [DataMember]
        public string Gender { get; set; }
        [DataMember]
        public string Nationality { get; set; }
        [DataMember]
        public string AadharNo { get; set; }
        [DataMember]
        public string PanNo { get; set; }
        [DataMember]
        public string PropertyLocation { get; set; }
        [DataMember]
        public string PropertyName { get; set; }
        [DataMember]
        public double EstimatedAmount { get; set; }
        [DataMember]
        public string Type_Of_Employment { get; set; }
        [DataMember]
        public int RetirementAge { get; set; }
        [DataMember]
        public string OrganizationType { get; set; }
        [DataMember]
        public string EmployerName { get; set; }
        [DataMember]
        public double MonthlyIncome { get; set; }
        [DataMember]
        public double Current_EMI { get; set; }
        [DataMember]
        public double Personal_Expenses { get; set; }
        [DataMember]
        public double InterestRate { get; set; }
        [DataMember]
        public int Tenure { get; set; }
        [DataMember]
        public double DownPayment { get; set; }
        [DataMember]
        public double LoanAmount { get; set; }
        public Nullable<System.DateTime> AppointmentDateTentative { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual CustomerDocument CustomerDocument { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LoanAccount> LoanAccounts { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TrackStatu> TrackStatus { get; set; }
    }
}
