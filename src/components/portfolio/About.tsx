import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { TrendingUp, BarChart3, Settings, BookOpen } from "lucide-react";

const highlights = [
  { icon: TrendingUp, label: "Supply Chain Management", desc: " Demand forecasting, supply planning,
S&OP, SKU-level planning, inventory optimization, replenishment planning, product lifecycle planning,
service level improvement, obsolescence control, lead time optimization" },
  { icon: BarChart3, label: "Procurement Management", desc: "Strategic sourcing, direct & indirect procurement, category management, global procurement,
supplier management, contract negotiations, tender analysis (RFQ/ RFP), TCO analysis, spend analysis, cost
reduction, procurement compliance." },
  { icon: Settings, label: "Business & Process", desc: "Business planning, commercial planning, promotion planning, pricing impact, KPI
reporting, financial and business acumen" },
  { icon: BookOpen, label: "Analytics & Tools", desc: "SAP S/4HANA, IBP, Oracle Cloud, Advanced Excel, SQL, Power BI, Tableau, Python" },
];

const About = () => (
  <SectionWrapper
    id="about"
    title="About Me"
    subtitle="Bridging supply chain operations with data analytics"
  >
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-muted-foreground leading-relaxed"
      >
        <p>
          Supply Chain Planning professional with 5+ years of experience across demand forecasting, supply planning, inventory management, and procurement in retail & manufacturing environments. Based in Hamburg, Germany.
        </p>
        <p>
          I specialize in transforming supply chain data into actionable insights—driving cost optimization, improving forecast accuracy, optimizing inventory levels, and enhancing S&OP alignment. I bring hands-on experience with Power BI, Tableau, and SQL, and have served as a key user for SAP MM and Oracle Cloud, including training and onboarding new users.
        </p>
        <p>
          I hold a Bachelor's degree in Mechanical Engineering and an MBA degree, along with CSCMP certifications in Procurement, Demand Planning, and Inventory Management.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-xl p-5 border border-border"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <item.icon className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold text-foreground text-sm mb-1">{item.label}</h3>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default About;
