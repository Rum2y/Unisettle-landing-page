import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Observer from "../framer";
import {
  CheckCircle,
  MapPin,
  ShoppingCart,
  Lightbulb,
  Search,
  FileText,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Settlement Checklist",
      description:
        "Step-by-step guidance for essential tasks like applying for SIN, getting Alberta ID, and opening bank accounts.",
      color: "text-teal-600",
    },
    {
      icon: Search,
      title: "Find Local Businesses",
      description:
        "Discover barbers, hairdressers, makeup artists, and other services in your area with reviews and contact info.",
      color: "text-teal-600",
    },
    {
      icon: ShoppingCart,
      title: "Grocery Guide",
      description:
        "Find the best grocery stores for your budget and dietary needs, from budget-friendly to specialty foods.",
      color: "text-teal-500",
    },
    {
      icon: Lightbulb,
      title: "Tips & Guides",
      description:
        "Essential information for getting settled, from arrival basics to post-graduation opportunities.",
      color: "text-teal-600",
    },
    {
      icon: FileText,
      title: "Document Tracking",
      description:
        "Keep track of your important documents and deadlines with our organized checklist system.",
      color: "text-teal-600",
    },
    {
      icon: MapPin,
      title: "Location-Based",
      description:
        "All recommendations and services are specifically curated for Alberta newcomers and students.",
      color: "text-teal-500",
    },
  ];

  return (
    <Observer>
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to Settle
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              UniSettle provides comprehensive tools and resources to make your
              settlement journey in Alberta smooth and successful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                sx={{
                  border: 0,
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                  "&:hover": {
                    boxShadow:
                      "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                  },
                  transition: "all 0.3s ease",
                  // background: "linear-gradient(to right, #f6f7f9, #e9ecef)", // Replace with your actual gradient
                }}
              >
                <CardContent
                  sx={{
                    p: 8,
                    "& .space-y-4": {
                      "& > * + *": {
                        mt: 4,
                      },
                    },
                    "& .w-12": {
                      width: 48,
                      height: 48,
                      backgroundColor: "teal.50",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    "& .h-6": {
                      height: 24,
                      width: 24,
                    },
                    "& .text-xl": {
                      fontSize: "1.25rem",
                      lineHeight: "1.75rem",
                      fontWeight: 600,
                    },
                    "& .text-muted-foreground": {
                      color: "text.secondary",
                      lineHeight: "1.625",
                    },
                  }}
                >
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Observer>
  );
};

export default Features;
