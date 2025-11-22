import { CostEstimator } from "@/components/cost-estimator"

export default function EstimatorPage() {
  return (
    <div className="container py-20 px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Cost Estimator</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Get an instant ballpark figure for your project. Select your requirements below to see what your investment
          might look like.
        </p>
      </div>

      <CostEstimator />
    </div>
  )
}
