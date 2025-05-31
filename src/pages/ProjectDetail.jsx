import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, Calendar, Users, CheckCircle } from 'lucide-react'
import { projectsData } from '../data/projects'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projectsData.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
        <Link to="/" className="text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          to="/#projects" 
          className="inline-flex items-center text-primary hover:underline mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {project.fullDescription || project.shortDescription}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {project.demo && (
                <Button asChild size="lg">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </a>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" size="lg" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </a>
                </Button>
              )}
            </div>

            {/* Technologies */}
            {project.technologies && (
              <div className="flex flex-wrap gap-2 justify-center">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'
              }}
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {project.timeline && (
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Timeline</h3>
                  <p className="text-muted-foreground">{project.timeline}</p>
                </CardContent>
              </Card>
            )}
            
            {project.teamSize && (
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Team Size</h3>
                  <p className="text-muted-foreground">{project.teamSize}</p>
                </CardContent>
              </Card>
            )}
            
            {project.category && (
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Category</h3>
                  <p className="text-muted-foreground">{project.category}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Motivation */}
            {project.motivation && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Motivation & Problem</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.motivation}
                </p>
              </section>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges & Solutions */}
            {(project.challenges || project.solutions) && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {project.challenges && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-red-400">Challenges</h3>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {project.solutions && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-green-400">Solutions</h3>
                      <ul className="space-y-3">
                        {project.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Results */}
            {project.results && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <p className="text-lg leading-relaxed">{project.results}</p>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Learnings */}
            {project.learnings && (
              <section>
                <h2 className="text-3xl font-bold mb-6">What I Learned</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.learnings}
                </p>
              </section>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border text-center">
            <Link 
              to="/#projects"
              className="inline-flex items-center text-primary hover:underline text-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}