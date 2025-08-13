import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function TodoSection() {
  const todoData = [
    { id: 1, product: "商品A", task: "在庫補充", status: "完了" },
    { id: 2, product: "商品B", task: "品質チェック", status: "進行中" },
    { id: 3, product: "商品C", task: "発注処理", status: "未着手" },
    { id: 4, product: "商品D", task: "配送確認", status: "進行中" },
  ]

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "完了":
        return "default"
      case "進行中":
        return "secondary"
      case "未着手":
        return "outline"
      default:
        return "outline"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "完了":
        return "text-green-600"
      case "進行中":
        return "text-blue-600"
      case "未着手":
        return "text-gray-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">ToDo</CardTitle>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          + タスク追加
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
            <div>商品名</div>
            <div>タスク名</div>
            <div>ステータス</div>
          </div>
          {todoData.map((item) => (
            <div key={item.id} className="grid grid-cols-3 gap-4 items-center py-3 border-b border-border/50">
              <div className="font-medium">{item.product}</div>
              <div className="text-sm">{item.task}</div>
              <div>
                <Badge variant={getStatusVariant(item.status)} className={`text-xs ${getStatusColor(item.status)}`}>
                  {item.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
