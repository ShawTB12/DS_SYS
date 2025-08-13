import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function InventoryAlerts() {
  const inventoryData = [
    { id: "A", name: "商品A", stock: 5, status: "low", orderStatus: "発注済み" },
    { id: "B", name: "商品B", stock: 12, status: "normal", orderStatus: "在庫充分" },
    { id: "C", name: "商品C", stock: 2, status: "critical", orderStatus: "発注必要" },
    { id: "D", name: "商品D", stock: 8, status: "normal", orderStatus: "在庫充分" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "destructive"
      case "low":
        return "secondary"
      default:
        return "default"
    }
  }

  const getStatusIcon = (orderStatus: string) => {
    if (orderStatus === "発注済み") return "✓"
    if (orderStatus === "発注必要") return "⚠️"
    return "○"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">在庫アラート</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
            <div>商品名</div>
            <div>在庫数</div>
            <div>発注状況</div>
            <div>ステータス</div>
          </div>
          {inventoryData.map((item) => (
            <div key={item.id} className="grid grid-cols-4 gap-4 items-center py-2 border-b border-border/50">
              <div className="font-medium">{item.name}</div>
              <div className="text-sm">{item.stock}個</div>
              <div className="flex items-center gap-2">
                <span className="text-lg">{getStatusIcon(item.orderStatus)}</span>
                <span className="text-sm">{item.orderStatus}</span>
              </div>
              <div>
                <Badge variant={getStatusColor(item.status)} className="text-xs">
                  {item.status === "critical" ? "緊急" : item.status === "low" ? "少量" : "正常"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
