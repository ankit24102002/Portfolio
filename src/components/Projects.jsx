import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    name: 'SmartDocs AI',
    tagline: 'RAG-Powered Enterprise Document Intelligence Platform',
    description:
      'An AI-powered document Q&A platform that lets users query thousands of enterprise documents using natural language. Built on a RAG pipeline with LangChain, OpenAI GPT-4, and ChromaDB — backed by an ASP.NET Core API and deployed on AWS.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'RAG', 'ChromaDB', 'ASP.NET Core', 'React', 'Docker', 'AWS', 'GitHub Actions'],
    highlights: [
      'RAG pipeline with 85%+ answer accuracy over 10,000+ enterprise documents',
      '60% faster document retrieval vs keyword search via vector similarity',
      'ASP.NET Core REST API + React frontend with real-time streaming responses',
      'Zero-downtime CI/CD: pytest → Docker build → ECR push → AWS deploy',
    ],
    color: '#a78bfa',
    bg: 'linear-gradient(135deg, #1a0f3a 0%, #120a2e 100%)',
    icon: '🤖',
    status: 'In Progress',
    detail: {
      overview:
        'SmartDocs AI solves a real enterprise problem: finding answers buried inside hundreds of PDFs, reports, and manuals. Instead of manually searching files, users ask questions in plain English and get accurate, sourced answers instantly — powered by a RAG (Retrieval-Augmented Generation) pipeline.',
      architecture: [
        {
          step: '1. Document Ingestion',
          desc: 'Users upload PDFs or text files. A Python service reads and splits them into overlapping chunks (e.g. 500 tokens with 50-token overlap). Each chunk is converted to a vector embedding using OpenAI\'s text-embedding-ada-002 model and stored in ChromaDB — a local vector database.',
        },
        {
          step: '2. Vector Search (Retrieval)',
          desc: 'When a user asks a question, the same embedding model converts the query to a vector. ChromaDB performs a cosine similarity search to find the top-K most relevant document chunks — this is the "Retrieval" part of RAG.',
        },
        {
          step: '3. Answer Generation (Augmented Generation)',
          desc: 'The retrieved chunks are injected as context into a GPT-4 prompt: "Answer the question using only the context below." GPT-4 generates a grounded answer using your documents — not hallucinated from the internet.',
        },
        {
          step: '4. ASP.NET Core API',
          desc: 'A .NET backend handles document management (upload, delete, list), user authentication, and orchestrates calls to the Python RAG service. Exposes clean REST endpoints consumed by the React frontend.',
        },
        {
          step: '5. CI/CD Pipeline (GitHub Actions)',
          desc: 'On every push to main: run pytest on Python services → build Docker images → push to Amazon ECR → deploy updated containers to AWS EC2 via a rolling update — zero downtime guaranteed.',
        },
      ],
      cicdFlow: 'Push to main → pytest → docker build → ECR push → AWS EC2 rolling deploy',
      whyBuilt:
        'Inspired by the documentation challenge at Q3 Technologies — engineers wasted hours searching WMS manuals and API specs. SmartDocs AI makes that instant, demonstrating practical LLM/RAG integration on top of a solid .NET backend.',
    },
  },
  {
    name: 'EventPulse',
    tagline: 'Serverless Event Processing & Notification Pipeline',
    description:
      'A production-grade event-driven pipeline built with Python and AWS that ingests application events via Lambda, routes heavy workloads to containerized ECS workers, and ships to production automatically through a GitHub Actions CI/CD pipeline.',
    tech: ['Python', 'AWS Lambda', 'ECS', 'ECR', 'GitHub Actions', 'SQS', 'Docker', 'API Gateway'],
    highlights: [
      'Python Lambda functions processing real-time events via API Gateway → SQS with auto-retry',
      'Containerized worker services on ECS with SQS-based auto-scaling for burst workloads',
      'Docker images built, tagged, and pushed to ECR on every merged PR via GitHub Actions',
      'Zero-downtime blue/green ECS deployments triggered automatically on main branch push',
    ],
    color: '#f59e0b',
    bg: 'linear-gradient(135deg, #1c1200 0%, #2a1800 100%)',
    icon: '⚡',
    status: 'In Progress',
    detail: {
      overview:
        'EventPulse is a cloud-native event processing system designed to handle high-throughput business events (order updates, inventory alerts, shipment notifications) in real time. It separates lightweight routing logic (Lambda) from heavy processing (ECS containers), making it cost-efficient and scalable.',
      architecture: [
        {
          step: '1. Event Ingestion',
          desc: 'Clients POST events to AWS API Gateway. A Python Lambda function validates the payload, enriches metadata, and pushes the message to an SQS queue. Invalid events are sent to a dead-letter queue (DLQ) for inspection.',
        },
        {
          step: '2. Event Routing (Lambda)',
          desc: 'A second Lambda reads from SQS, classifies the event type (ALERT, REPORT, SYNC), and either handles it inline for lightweight tasks or forwards to an ECS queue for heavy processing.',
        },
        {
          step: '3. Heavy Processing (ECS + Docker)',
          desc: 'Containerised Python workers on ECS Fargate consume the heavy-task queue. Tasks like bulk email dispatch, PDF generation, or data transforms run here without Lambda\'s 15-minute limit. ECS auto-scales based on SQS queue depth.',
        },
        {
          step: '4. Container Registry (ECR)',
          desc: 'All Docker images are stored in Amazon ECR, tagged with the Git commit SHA. Rollbacks are trivial — just redeploy the previous tagged image.',
        },
        {
          step: '5. CI/CD Pipeline (GitHub Actions)',
          desc: 'On every push to main: (1) run pytest, (2) build Docker image, (3) push to ECR, (4) update ECS task definition, (5) trigger rolling deployment — zero downtime.',
        },
      ],
      cicdFlow: 'Push to main → pytest → docker build → ECR push → ECS task def update → Rolling deploy',
      whyBuilt:
        'Built to solve a real problem from WMS work at Q3 Technologies — warehouse events needed a reliable, scalable dispatch mechanism that could handle spikes without manual intervention.',
    },
  },
  {
    name: 'Park Spotter',
    tagline: 'Smart Parking Management Platform',
    description:
      'A full-stack parking management platform enabling real-time availability tracking and intelligent location-based search across 200+ parking locations with role-based access control.',
    tech: ['ASP.NET Core', 'MySQL', 'JWT', 'REST API'],
    highlights: [
      '15+ secure RESTful APIs with Role-Based Access Control (RBAC)',
      '40% faster location-based search via spatial indexing',
      'Real-time availability tracking for 200+ parking locations',
      'JWT authentication with separate flows for users and admins',
    ],
    color: '#00d4ff',
    bg: 'linear-gradient(135deg, #0a1a2e 0%, #0d2040 100%)',
    icon: '🅿️',
    status: 'Completed',
    detail: {
      overview:
        'Park Spotter is a full-stack REST API platform that allows drivers to find, reserve, and navigate to available parking spots in real time. It supports two user roles — regular users and parking admins — each with distinct permission levels enforced through JWT-based RBAC.',
      architecture: [
        {
          step: '1. Authentication & Authorization',
          desc: 'JWT tokens are issued on login with role claims (User / Admin). Every protected endpoint validates the token and checks the role claim. Admins manage locations and slots; users search and reserve.',
        },
        {
          step: '2. Parking Location APIs',
          desc: 'RESTful endpoints allow admins to register parking locations with GPS coordinates, total slots, and pricing. MySQL stores location data with spatial indexing (POINT type + SPATIAL INDEX) for fast geo-queries.',
        },
        {
          step: '3. Location-Based Search',
          desc: 'Users submit coordinates and a radius. The API runs a Haversine-formula query on MySQL spatial indexes to return nearby locations sorted by distance — 40% faster than a naive full-table scan.',
        },
        {
          step: '4. Real-Time Availability',
          desc: 'Slot availability is updated on every reservation or check-in. The API returns live slot counts per location, allowing users to see up-to-date occupancy before navigating.',
        },
        {
          step: '5. Reservation Flow',
          desc: 'Users reserve a slot via POST /reservations. The API checks availability, creates a booking with a unique reference code, and decrements the slot counter atomically using a DB transaction to prevent double-booking.',
        },
      ],
      cicdFlow: null,
      whyBuilt:
        'Built as a capstone project to demonstrate full-stack API design — authentication, spatial queries, RBAC, and clean RESTful architecture — skills directly applicable to enterprise .NET backend roles.',
    },
  },
]

function ProjectImage({ project }) {
  return (
    <div
      className="w-full sm:w-56 lg:w-64 h-44 sm:h-52 rounded-xl flex-shrink-0 flex items-center justify-center relative overflow-hidden"
      style={{ background: project.bg, border: `1px solid ${project.color}25` }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(${project.color} 1px, transparent 1px), linear-gradient(90deg, ${project.color} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 50%, ${project.color}15 0%, transparent 70%)` }}
      />
      <div className="relative z-10 text-center">
        <div className="text-5xl mb-2">{project.icon}</div>
        <div className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: project.color }}>
          {project.name}
        </div>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 24 }}
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl"
        style={{
          background: '#0d1220',
          border: `1px solid ${project.color}30`,
          boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 60px ${project.color}10`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b"
          style={{ background: '#0d1220', borderColor: `${project.color}20` }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <h3 className="text-lg font-bold text-white">{project.name}</h3>
              <p className="text-xs" style={{ color: project.color }}>{project.tagline}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="text-xs px-2.5 py-1 rounded-full font-semibold"
              style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
            >
              {project.status}
            </span>
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg font-mono text-gray-300"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {t}
              </span>
            ))}
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: project.color }}>
              Overview
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">{project.detail.overview}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: project.color }}>
              How It Works
            </h4>
            <div className="space-y-4">
              {project.detail.architecture.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-4"
                >
                  <div
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold mb-0.5">{item.step}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {project.detail.cicdFlow && (
            <div>
              <h4 className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: project.color }}>
                CI/CD Pipeline
              </h4>
              <div
                className="px-4 py-3 rounded-xl font-mono text-xs text-gray-300 leading-relaxed"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {project.detail.cicdFlow}
              </div>
            </div>
          )}

          <div
            className="px-4 py-3 rounded-xl"
            style={{ background: `${project.color}08`, border: `1px solid ${project.color}20` }}
          >
            <p className="text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: project.color }}>
              Why I Built This
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">{project.detail.whyBuilt}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section id="projects" className="py-24 px-4" style={{ background: '#080c14' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-white mb-3"
            >
              Projects
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 w-20 bg-[#00d4ff] mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-sm mt-3"
            >
              Click any project to see how it works
            </motion.p>
          </div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelected(project)}
                className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl transition-all duration-300 cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = `1px solid ${project.color}35`
                  e.currentTarget.style.boxShadow = `0 20px 60px ${project.color}08`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <ProjectImage project={project} />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                    <ul className="space-y-1.5 mb-4">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-gray-400 text-sm">
                          <span style={{ color: project.color }} className="shrink-0 font-mono">▹</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg"
                          style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}25` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-medium shrink-0" style={{ color: project.color }}>
                      View Details →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}
