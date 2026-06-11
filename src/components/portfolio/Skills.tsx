import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  {
    category: "Supply Chain Planning & Execution",
    skills: ["Demand Forecasting", "Supply Planning", "Inventory Monitoring", "Material Planning", "Warehouse Replenishment", "KPI Monitoring", "S&OP"],
  },
  {
    category: "Procurement & Supplier Management",
    skills: ["Strategic Sourcing", "Supplier Performance Management", "Lead Time Optimization", "TCO analysis", "Risk & Resilience"],
  },
  {
    category: "Technical Skills",
    skills: ["SAP s4hana", "Oracle Cloud", "Power BI", "Tableau", "SQL", "Advanced Excel", "Python", "reporting and data analysis"],
  },
  {
    category: "Soft Skills",
    skills: ["Analytical Thinking", "Problem Solving", "Decision Making", "Cross-functional Collaboration", "Continous learning"],
  },
  {
    category: "Business & Process",
    skills: ["Business planning", "commercial planning", "promotion planning", "cost impact"],
  },
];

const Skills = () => (
  <SectionWrapper id="skills" title="Skills" subtitle="Tools, technologies, and domain expertise">
    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="bg-card rounded-xl p-6 border border-border"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-sm bg-muted text-foreground px-3 py-1.5 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
