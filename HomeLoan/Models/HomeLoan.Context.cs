﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class HomeLoanEntities2 : DbContext
    {
        public HomeLoanEntities2()
            : base("name=HomeLoanEntities2")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<CustomerApplication> CustomerApplications { get; set; }
        public virtual DbSet<LoanAccount> LoanAccounts { get; set; }
        public virtual DbSet<CustomerDocument> CustomerDocuments { get; set; }
        public virtual DbSet<TrackStatu> TrackStatus { get; set; }
    
        public virtual int proc_changePass(string aid, string pass)
        {
            var aidParameter = aid != null ?
                new ObjectParameter("aid", aid) :
                new ObjectParameter("aid", typeof(string));
    
            var passParameter = pass != null ?
                new ObjectParameter("pass", pass) :
                new ObjectParameter("pass", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("proc_changePass", aidParameter, passParameter);
        }
    
        public virtual int proc_changeStatus(string aid, string status)
        {
            var aidParameter = aid != null ?
                new ObjectParameter("aid", aid) :
                new ObjectParameter("aid", typeof(string));
    
            var statusParameter = status != null ?
                new ObjectParameter("status", status) :
                new ObjectParameter("status", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("proc_changeStatus", aidParameter, statusParameter);
        }
    
        public virtual ObjectResult<proc_getLoan_Result> proc_getLoan(string aid)
        {
            var aidParameter = aid != null ?
                new ObjectParameter("aid", aid) :
                new ObjectParameter("aid", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_getLoan_Result>("proc_getLoan", aidParameter);
        }
    
        public virtual int proc_changeCustomerPass(string aid, string pass)
        {
            var aidParameter = aid != null ?
                new ObjectParameter("aid", aid) :
                new ObjectParameter("aid", typeof(string));
    
            var passParameter = pass != null ?
                new ObjectParameter("pass", pass) :
                new ObjectParameter("pass", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("proc_changeCustomerPass", aidParameter, passParameter);
        }
    
        public virtual ObjectResult<proc_viewStatus_Result> proc_viewStatus(string aid, string pass)
        {
            var aidParameter = aid != null ?
                new ObjectParameter("aid", aid) :
                new ObjectParameter("aid", typeof(string));
    
            var passParameter = pass != null ?
                new ObjectParameter("pass", pass) :
                new ObjectParameter("pass", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_viewStatus_Result>("proc_viewStatus", aidParameter, passParameter);
        }
    }
}