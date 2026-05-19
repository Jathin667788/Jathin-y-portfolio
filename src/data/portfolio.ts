import {
  Activity,
  BadgeCheck,
  Blocks,
  BrainCircuit,
  Braces,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Database,
  FileDown,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Route,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';
import type {
  Certification,
  ContactLink,
  ExpertiseCategory,
  Metric,
  NavItem,
  Project,
  Repository,
  TimelineItem,
} from '../types/portfolio';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const metrics: Metric[] = [
  {
    value: 1,
    suffix: 'M+',
    label: 'XML Payloads Processed Daily',
    detail: 'Enterprise integration throughput across distributed systems.',
  },
  {
    value: 5,
    suffix: 'M+',
    label: 'Records Handled Per Day',
    detail: 'High-volume data workflows tuned for predictable execution.',
  },
  {
    value: 50,
    suffix: 'K+',
    label: 'EDI Messages Daily',
    detail: 'Partner-facing transaction flows with resilient processing.',
  },
  {
    value: 45,
    suffix: '%',
    label: 'API Performance Improvement',
    detail: 'Measured response time gains through backend optimization.',
  },
  {
    value: 65,
    suffix: '%',
    label: 'Manual Effort Reduction',
    detail: 'Automation-first workflows for operational scale.',
  },
  {
    value: 0,
    prefix: 'Zero ',
    label: 'Downtime Deployments',
    detail: 'Release reliability through CI/CD and cloud-native practices.',
  },
];

export const aboutFeatures = [
  { title: 'Cloud-Native Architecture', icon: CloudCog },
  { title: 'Azure Serverless Systems', icon: Zap },
  { title: 'Enterprise Integrations', icon: Network },
  { title: 'Distributed Workflows', icon: Workflow },
  { title: 'Reliability Engineering', icon: ShieldCheck },
  { title: 'High-Throughput Processing', icon: Activity },
];

export const expertiseCategories: ExpertiseCategory[] = [
  {
    title: 'Backend',
    icon: Code2,
    signal: 'Production Critical',
    grade: 'Advanced',
    tools: ['C#', 'ASP.NET Core', 'Entity Framework Core'],
  },
  {
    title: 'Cloud',
    icon: CloudCog,
    signal: 'Azure Specialized',
    grade: 'Enterprise Scale',
    tools: ['Azure Functions', 'Durable Functions', 'Azure Logic Apps', 'Azure API Management', 'Azure Storage', 'Azure RBAC'],
  },
  {
    title: 'Integration',
    icon: Route,
    signal: 'High Throughput',
    grade: 'Production Critical',
    tools: ['XML', 'XSLT', 'EDI', 'REST APIs', 'Service Bus', 'RabbitMQ'],
  },
  {
    title: 'Frontend',
    icon: Braces,
    signal: 'Full-Stack Ready',
    grade: 'Applied',
    tools: ['React', 'Blazor WASM', 'Angular'],
  },
  {
    title: 'Database',
    icon: Database,
    signal: 'Performance Tuned',
    grade: 'Advanced',
    tools: ['SQL Server'],
  },
  {
    title: 'DevOps',
    icon: GitBranch,
    signal: 'Release Reliable',
    grade: 'Production Critical',
    tools: ['CI/CD', 'Docker', 'GitHub', 'Deployment Automation'],
  },
];

export const projects: Project[] = [
  {
    title: 'Enterprise Logistics Integration Platform',
    icon: Network,
    description:
      'Designed and maintained Azure-based logistics integration systems processing high-volume XML and EDI transactions between distributed enterprise systems and external partners.',
    problem:
      'Enterprise logistics data had to move reliably across partner boundaries while preserving ordering, traceability, and retry behavior under heavy load.',
    impact:
      'Improved operational confidence by standardizing transformation, orchestration, fault isolation, and idempotent processing across integration lanes.',
    metrics: ['1M+ XML payloads/day', '50K+ EDI/day', 'High-throughput orchestration'],
    technologies: ['Azure Functions', 'Durable Functions', 'Logic Apps', 'XSLT', 'SQL Server', 'Service Bus'],
    highlights: ['Fault-tolerant workflows', 'Idempotent processing', 'Partner integrations', 'Telemetry-first operations'],
  },
  {
    title: 'Cloud-Native Workforce Management Platform',
    icon: BriefcaseBusiness,
    description:
      'Developed a production-grade employee workforce and time-tracking platform using ASP.NET Core and Blazor WASM with secure RBAC-based authentication and optimized SQL-backed APIs.',
    problem:
      'Manual workforce operations created latency, repeated data entry, and inconsistent visibility across operational teams.',
    impact:
      'Delivered faster API responses and automated workflows that reduced recurring manual operations for business users.',
    metrics: ['45% API response improvement', '65% reduction in manual operations', 'Secure RBAC workflows'],
    technologies: ['ASP.NET Core', 'Blazor WASM', 'SQL Server', 'Azure RBAC', 'Entity Framework Core'],
    highlights: ['Production-scale workflows', 'Secure authentication', 'SQL-backed APIs', 'Operational automation'],
  },
  {
    title: 'Durable Workflow Automation Engine',
    icon: Workflow,
    description:
      'Built stateful orchestration systems using Azure Durable Functions for long-running enterprise workflows with retries, monitoring, recovery mechanisms, and distributed coordination.',
    problem:
      'Long-running business processes needed consistent state management, observability, and recovery paths across asynchronous execution boundaries.',
    impact:
      'Created recoverable orchestration paths that improved deployment confidence and reduced operational response time.',
    metrics: ['Zero-downtime deployments', 'Stateful orchestration', 'Failure recovery'],
    technologies: ['Azure Durable Functions', 'Azure Storage', 'Service Bus', 'Application Insights', 'CI/CD'],
    highlights: ['Retry policies', 'Failure recovery', 'Distributed orchestration', 'Monitoring hooks'],
  },
  {
    title: 'AI-Assisted Integration Automation Lab',
    icon: BrainCircuit,
    description:
      'Experimental engineering sandbox exploring AI-assisted workflow diagnostics, XML validation automation, and intelligent integration tooling.',
    problem:
      'Integration diagnostics can become slow when malformed payloads, schema failures, and runtime traces are spread across multiple tools.',
    impact:
      'Explored future-ready engineering patterns for faster validation loops, workflow intelligence, and assisted support diagnostics.',
    metrics: ['AI-assisted validation', 'Workflow intelligence', 'Future-ready tooling'],
    technologies: ['Azure', 'XML Validation', 'Automation', 'Diagnostics', 'AI Tooling'],
    highlights: ['Schema checks', 'Trace summarization', 'Integration diagnostics', 'Automation experiments'],
  },
];

export const architectureNodes = [
  { label: 'HTTP Trigger', icon: Zap, accent: 'cyan' },
  { label: 'Azure Function', icon: CloudCog, accent: 'azure' },
  { label: 'Queue / Service Bus', icon: ServerCog, accent: 'violet' },
  { label: 'Durable Orchestration', icon: Workflow, accent: 'cyan' },
  { label: 'Transformation Engine', icon: Blocks, accent: 'emerald' },
  { label: 'External Systems', icon: Network, accent: 'azure' },
  { label: 'Monitoring & Logging', icon: Activity, accent: 'amber' },
];

export const timeline: TimelineItem[] = [
  {
    role: 'Software Engineer - .NET Developer & Azure Integration Engineer',
    company: 'Enkaytech, Bengaluru',
    period: 'Current',
    focus: [
      'Azure cloud engineering',
      'Integration platforms',
      'Serverless workflows',
      'Production reliability',
      'SQL optimization',
      'CI/CD',
      'High-throughput systems',
    ],
    achievements: [
      'Reduced API response time by 45%',
      'Reduced operational effort by 65%',
      'Improved deployment reliability by 50%',
      'Reduced MTTR by 40%',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Codesquarry Pvt Ltd',
    period: 'Internship',
    focus: ['Production applications', 'Testing', 'UI validation', 'Shopify platforms'],
    achievements: ['Contributed to production application quality', 'Supported validation workflows across shipped experiences'],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Microsoft Certified: Azure Developer Associate',
    code: 'AZ-204',
    issuer: 'Microsoft',
    icon: BadgeCheck,
  },
  {
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    code: 'PL-300',
    issuer: 'Microsoft',
    icon: Sparkles,
  },
];

export const repositories: Repository[] = [
  {
    name: 'azure-integration-patterns',
    description: 'Serverless orchestration, retry policies, and event-driven integration reference patterns.',
    stack: ['Azure Functions', 'Durable Functions', 'Service Bus'],
    signal: 'Architecture',
  },
  {
    name: 'dotnet-api-performance-lab',
    description: 'ASP.NET Core profiling experiments, SQL tuning notes, and API response optimization examples.',
    stack: ['ASP.NET Core', 'SQL Server', 'EF Core'],
    signal: 'Performance',
  },
  {
    name: 'xml-edi-automation-suite',
    description: 'Payload validation, transformation pipelines, and operational diagnostics for partner data flows.',
    stack: ['XML', 'XSLT', 'EDI'],
    signal: 'Integration',
  },
];

export const contactLinks: ContactLink[] = [
  { label: 'LinkedIn', value: 'linkedin.com/in/jathin-y', href: 'https://www.linkedin.com/', icon: Linkedin },
  { label: 'GitHub', value: 'github.com/jathin-y', href: 'https://github.com/', icon: Github },
  { label: 'Email', value: 'jathin.y@example.com', href: 'mailto:jathin.y@example.com', icon: Mail },
  { label: 'Location', value: 'Bengaluru, India', href: 'https://maps.google.com/?q=Bengaluru%2C%20India', icon: MapPin },
];

export const resumeActions = [
  { label: 'Download Resume', href: '/resume-jathin-y.md', icon: FileDown },
  { label: 'View Projects', href: '#projects', icon: Blocks },
];
