import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function SalesTrends() {
  const salesData = [
    { month: "1月", sales: 1200000 },
    { month: "2月", sales: 1350000 },
    { month: "3月", sales: 1180000 },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(amount)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">月売上推移</CardTitle>
        <Button variant="outline" size="sm">
          過去3ヶ月
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Sales Chart Area */}
          <div className="h-32 bg-muted/20 rounded-lg flex items-center justify-center border border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{formatCurrency(1243333)}</div>
              <div className="text-sm text-muted-foreground">平均月売上</div>
            </div>
          </div>

          {/* Monthly Data */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground border-b pb-2">月別売上詳細</div>
            {salesData.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="text-sm font-medium">{item.month}</span>
                <span className="text-sm font-mono">{formatCurrency(item.sales)}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
