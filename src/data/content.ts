export const metrics = [
  { value: "250+", label: "Empresas atendidas", suffix: "" },
  { value: "99.9", label: "Disponibilidade", suffix: "%" },
  { value: "1M", label: "Tarefas automatizadas", suffix: "+" },
  { value: "35", label: "Mais produtividade", suffix: "%" },
]

export const pains = [
  { icon: "FileSpreadsheet", title: "Planilhas espalhadas", desc: "Dados desconectados em dezenas de planilhas diferentes." },
  { icon: "Clock", title: "Atendimento lento", desc: "Clientes esperando horas por respostas manuais." },
  { icon: "PlugZap", title: "Falta de integração", desc: "Sistemas que não conversam entre si." },
  { icon: "RotateCcw", title: "Retrabalho diário", desc: "Equipe perdendo tempo com tarefas repetitivas." },
  { icon: "Database", title: "Dados descentralizados", desc: "Informações críticas espalhadas sem organização." },
  { icon: "BarChart3", title: "Decisões sem métricas", desc: "Gestão baseada em achismo, não em dados reais." },
]

export const solutions = [
  { icon: "Cpu", title: "Automação com IA", desc: "Processos inteligentes que aprendem e evoluem com seu negócio." },
  { icon: "Activity", title: "Dashboard em tempo real", desc: "Métricas atualizadas instantaneamente para decisões rápidas." },
  { icon: "Share2", title: "Integrações via API", desc: "Conecte-se com qualquer sistema ou plataforma do mercado." },
  { icon: "FileText", title: "Relatórios inteligentes", desc: "Insights acionáveis gerados automaticamente por IA." },
  { icon: "Users", title: "Gestão de clientes", desc: "CRM integrado com histórico completo e automação." },
  { icon: "Shield", title: "Segurança avançada", desc: "Criptografia de ponta a ponta e conformidade LGPD." },
]

export const steps = [
  { step: "01", title: "Conecte suas ferramentas", desc: "Integre seus sistemas atuais em minutos, sem complicação." },
  { step: "02", title: "Configure suas automações", desc: "Crie fluxos inteligentes que trabalham 24 horas por dia." },
  { step: "03", title: "Acompanhe tudo em tempo real", desc: "Monitore resultados e tome decisões com dados precisos." },
]

export const integrations = [
  "WhatsApp", "Google", "Meta", "Stripe", "Slack", "Notion",
  "Shopify", "HubSpot", "Zapier", "API", "Webhooks", "ERP",
]

export const benefits = [
  { icon: "Zap", title: "Reduza tarefas repetitivas", desc: "Automatize processos manuais e libere sua equipe para o que importa." },
  { icon: "Layers", title: "Centralize informações", desc: "Todos os dados da sua empresa em um único lugar, organizados." },
  { icon: "TrendingUp", title: "Aumente produtividade", desc: "Sua equipe produzindo mais em menos tempo com as ferramentas certas." },
  { icon: "LineChart", title: "Ganhe previsibilidade", desc: "Antecipe resultados e tome decisões com confiança." },
  { icon: "PieChart", title: "Decisões com dados", desc: "Chega de achismo. Decisões baseadas em métricas reais." },
  { icon: "Rocket", title: "Escale sem aumentar equipe", desc: "Cresça seu negócio sem precisar dobrar o tamanho do time." },
]

export const plans = [
  {
    name: "Starter", popular: false,
    desc: "Para começar", price: "Consultar",
    features: ["Até 3 usuários", "5 automações", "Dashboard básico", "Suporte por email"],
  },
  {
    name: "Professional", popular: true,
    desc: "Mais popular", price: "Consultar",
    features: ["Até 15 usuários", "Automações ilimitadas", "Dashboard completo", "Integrações via API", "Suporte prioritário", "Relatórios IA"],
  },
  {
    name: "Enterprise", popular: false,
    desc: "Para operações maiores", price: "Consultar",
    features: ["Usuários ilimitados", "Automações customizadas", "Whitelabel", "SLA garantido", "Gerente dedicado", "Onboarding prioritário"],
  },
]

export const testimonials = [
  { name: "Carlos Mendes", role: "CTO", company: "TechFlow Solutions", avatar: "CM", color: "#6366F1", text: "Reduzimos custos operacionais em 40% nos primeiros 3 meses. A plataforma transformou totalmente nossa operação.", result: "40% redução de custos" },
  { name: "Ana Oliveira", role: "CEO", company: "Digital Corp", avatar: "AO", color: "#22D3EE", text: "Conseguimos automatizar 90% dos processos manuais. A equipe agora foca no que realmente importa: crescer o negócio.", result: "90% processos automatizados" },
  { name: "Roberto Lima", role: "Diretor de Operações", company: "InnovaTech", avatar: "RL", color: "#7C3AED", text: "A integração com nossos sistemas foi imediata. Em uma semana já estávamos operando com dados em tempo real.", result: "1 semana de implementação" },
]

export const faqs = [
  { q: "Preciso instalar alguma coisa?", a: "Não! Nossa plataforma é 100% online, funciona direto do navegador. Você só precisa de internet para acessar." },
  { q: "A plataforma integra com meus sistemas?", a: "Sim! Oferecemos dezenas de integrações nativas e API flexível para conectar com qualquer sistema." },
  { q: "Posso usar com minha equipe?", a: "Sim, todos os planos incluem múltiplos usuários com permissões personalizadas por nível de acesso." },
  { q: "Tem suporte?", a: "Sim! Suporte por email no plano Starter, prioritário no Professional e gerente dedicado no Enterprise." },
  { q: "Meus dados ficam seguros?", a: "Totalmente. Utilizamos criptografia de ponta a ponta, servidores na AWS e conformidade com a LGPD." },
  { q: "Existe plano personalizado?", a: "Sim! Para necessidades específicas, montamos um plano sob medida para sua empresa." },
  { q: "Quanto tempo leva para implementar?", a: "A maioria dos clientes está operando em menos de uma semana. Oferecemos onboarding completo." },
]

export const techItems = [
  "IA", "Automação", "APIs", "Cloud", "CRM", "Analytics",
  "WhatsApp", "Dashboards", "Segurança", "Integrações", "Escalabilidade", "Performance",
]

export const dashboardCards = [
  { label: "Receita Total", value: "R$ 284.500", change: "+23%", color: "text-emerald-400" },
  { label: "Clientes Ativos", value: "1.847", change: "+12%", color: "text-blue-400" },
  { label: "Tarefas Automatizadas", value: "45.230", change: "+67%", color: "text-purple-400" },
  { label: "Economia Gerada", value: "R$ 89.200", change: "+34%", color: "text-cyan-400" },
]