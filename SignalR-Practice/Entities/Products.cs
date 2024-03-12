using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace signalR_project.Entities
{
    public class Products
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProId { get; set; }
        public string ProdName { get; set; }
        public string Category {  get; set; }
        public decimal UnitPrice { get; set; }
        public int StockQty { get; set; }

    }
}
