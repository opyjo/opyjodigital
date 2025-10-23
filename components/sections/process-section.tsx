export const ProcessSection = () => {
  const processSteps = [
    {
      step: "1",
      title: "Discovery",
      description:
        "Understanding your goals, requirements, and target audience",
      color: "primary",
    },
    {
      step: "2",
      title: "Planning",
      description:
        "Creating a detailed project roadmap and technical architecture",
      color: "accent",
    },
    {
      step: "3",
      title: "Development",
      description:
        "Building your project with regular updates and feedback loops",
      color: "primary",
    },
    {
      step: "4",
      title: "Launch",
      description: "Deployment, testing, and ongoing support for your success",
      color: "accent",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            How I Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A streamlined process to bring your project from idea to reality
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.step} className="text-center space-y-3 group">
              <div
                className={`w-16 h-16 rounded-full ${
                  step.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                } flex items-center justify-center mx-auto text-2xl font-bold ${
                  step.color === "primary" ? "text-primary" : "text-accent"
                } group-hover:scale-110 transition-transform duration-300`}
              >
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground text-pretty">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
