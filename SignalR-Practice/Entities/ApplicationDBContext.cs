using Microsoft.EntityFrameworkCore;

namespace signalR_project.Entities
{
    public class ApplicationDBContext : DbContext
    {

        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {

        }
        public virtual DbSet<Products> Products { get; set; }
    }
}
