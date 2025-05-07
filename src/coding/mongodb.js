db.sales.aggregate([
    { $unwind: "$items" },
    {
      $group: {
        _id: {
          store: "$store",
          month: { $dateToString: { format: "%Y-%m", date: "$date" } }
        },
        totalRevenue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } },
        averagePrice: { $avg: "$items.price" }
      }
    },
    {
      $project: {
        _id: 0,
        store: "$_id.store",
        month: "$_id.month",
        totalRevenue: 1,
        averagePrice: 1
      }
    },
    { $sort: { store: 1, month: 1 } }
  ])
  
