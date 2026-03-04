import { ArrowRight, CalendarDays, CheckCircle2, Clock, MapPin, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const programs = [
  {
    title: 'Private 1:1 Coaching',
    description: 'Technical fixes, tactical IQ, and match prep built around your goals.',
    price: '$95 / 60 min',
    details: ['Video analysis included', 'Custom drills + homework', 'Court-side feedback'],
  },
  {
    title: 'Small Group Clinics',
    description: 'High-energy sessions focused on movement, patterns, and live points.',
    price: '$45 / 90 min',
    details: ['Max 5 players', 'Weekly skill themes', 'Level-based courts'],
  },
  {
    title: 'High Performance Track',
    description: 'Periodized training for tournament athletes and college-bound players.',
    price: '$320 / month',
    details: ['Strength + agility blocks', 'Match strategy labs', 'College recruiting prep'],
  },
]

const testimonials = [
  {
    quote:
      'Coach Maya rebuilt my serve in two weeks. I finally stopped double-faulting under pressure.',
    name: 'Elena R.',
    role: 'USTA 4.0 competitor',
  },
  {
    quote:
      'The clinics feel like mini-matches with constant feedback. I went 4-1 in my last league round.',
    name: 'Jason M.',
    role: 'Adult league captain',
  },
  {
    quote:
      'My daughter added three mph to her first serve and made varsity as a freshman.',
    name: 'Sofia P.',
    role: 'Parent of junior athlete',
  },
]

const schedule = [
  {
    day: 'Mon',
    time: '6:30 AM',
    focus: 'Footwork + speed ladders',
  },
  {
    day: 'Wed',
    time: '5:30 PM',
    focus: 'Baseline patterns + live points',
  },
  {
    day: 'Sat',
    time: '9:00 AM',
    focus: 'Serve + return clinic',
  },
]

const metrics = [
  { label: 'Players Coached', value: '340+' },
  { label: 'Tournament Wins', value: '120+' },
  { label: 'Average Serve Gain', value: '7 mph' },
  { label: 'Years Coaching', value: '12' },
]

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
              <PlayCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Vicky</p>
              <p className="text-lg font-semibold">Tennis Coaching</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#programs" className="hover:text-primary">
              Programs
            </a>
            <a href="#schedule" className="hover:text-primary">
              Schedule
            </a>
            <a href="#coach" className="hover:text-primary">
              Coach
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </div>
          <Button className="gap-2">
            Book a Session
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://img.vibestack.site/s/tennis%20court%20sunset/1600/900"
              alt="Tennis court at sunset"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 md:flex-row md:items-center md:gap-10 md:px-8 md:py-28">
            <div className="max-w-xl space-y-6">
              <Badge className="bg-accent text-accent-foreground">Next clinic: Saturday 9:00 AM</Badge>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Precision coaching for confident, fearless tennis.
              </h1>
              <p className="text-lg text-muted-foreground">
                Work with Coach Maya Trent, former top-50 doubles pro, to build repeatable technique,
                match-winning patterns, and mental clarity on court.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="gap-2">
                  Start Training
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="secondary" className="gap-2">
                  Watch Session Reel
                  <PlayCircle className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-2xl font-semibold text-primary">{metric.value}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="w-full max-w-md border-border/60 bg-card/90 shadow-xl backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl">Book a consult</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Choose your training goal and we'll follow up within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border border-border/60 bg-muted/40 px-4 py-3">
                  <p className="text-sm font-medium">Primary goal</p>
                  <p className="text-sm text-muted-foreground">Serve power + consistency</p>
                </div>
                <div className="rounded-lg border border-border/60 bg-muted/40 px-4 py-3">
                  <p className="text-sm font-medium">Preferred lesson</p>
                  <p className="text-sm text-muted-foreground">Private 1:1, mornings</p>
                </div>
                <Button className="w-full">Request Availability</Button>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Sessions at Vicky Tennis Center
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="programs" className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Programs</p>
              <h2 className="text-3xl font-semibold">Training formats that fit your schedule.</h2>
            </div>
            <Button variant="outline" className="gap-2">
              Compare packages
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.title} className="border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-2xl font-semibold text-primary">{program.price}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {program.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button variant="secondary" className="w-full">
                    Reserve
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="schedule" className="bg-muted/40 py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Weekly rhythm</p>
                <h2 className="text-3xl font-semibold">Structured reps with built-in recovery.</h2>
                <p className="mt-4 text-muted-foreground">
                  Clinics run on a predictable cadence so you can build consistency. Private lessons are
                  scheduled around tournament calendars.
                </p>
                <div className="mt-8 grid gap-4">
                  {schedule.map((session) => (
                    <div
                      key={session.day}
                      className="flex items-center justify-between rounded-xl border border-border/60 bg-background px-4 py-4"
                    >
                      <div>
                        <p className="text-sm font-semibold text-primary">{session.day}</p>
                        <p className="text-lg font-semibold">{session.time}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{session.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="border-border/60">
                <CardHeader>
                  <CardTitle className="text-lg">New player start here</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    30-minute evaluation + personalized training roadmap.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-muted/40 px-4 py-3">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Next available</p>
                      <p className="text-xs text-muted-foreground">Wednesday, 4:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-muted/40 px-4 py-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Evaluation length</p>
                      <p className="text-xs text-muted-foreground">30 minutes</p>
                    </div>
                  </div>
                  <Button className="w-full">Schedule evaluation</Button>
                  <p className="text-xs text-muted-foreground">
                    Includes baseline video + written feedback.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="coach" className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <Card className="overflow-hidden border-border/60">
              <img
                src="https://img.vibestack.site/s/tennis%20coach%20headshot%20studio%20lighting/600/600"
                alt="Coach Maya Trent headshot"
                className="h-72 w-full object-cover"
                loading="lazy"
              />
              <CardContent className="space-y-4 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Head coach</p>
                  <h3 className="text-2xl font-semibold">Maya Trent</h3>
                  <p className="text-sm text-muted-foreground">
                    Former top-50 doubles pro, PTR certified, specializes in modern baseline play.
                  </p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    12 years coaching juniors + adults
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    NCAA recruiting advisory
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Mental toughness + match routine planning
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Player stories</p>
              <h2 className="text-3xl font-semibold">Results backed by repetition and confidence.</h2>
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className="border-border/60">
                    <CardContent className="space-y-3 p-5">
                      <p className="text-sm text-muted-foreground">"{testimonial.quote}"</p>
                      <div>
                        <p className="text-sm font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border/60 bg-primary/10">
              <CardContent className="space-y-3 p-6">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="text-lg font-semibold">Vicky Tennis Center</p>
                <p className="text-sm text-muted-foreground">7420 Ridgeway Blvd, Austin, TX</p>
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardContent className="space-y-3 p-6">
                <CalendarDays className="h-5 w-5 text-primary" />
                <p className="text-lg font-semibold">Open hours</p>
                <p className="text-sm text-muted-foreground">Mon-Fri 6:00 AM - 8:00 PM</p>
              </CardContent>
            </Card>
            <Card className="border-border/60">
              <CardContent className="space-y-3 p-6">
                <Clock className="h-5 w-5 text-primary" />
                <p className="text-lg font-semibold">Contact</p>
                <p className="text-sm text-muted-foreground">hello@vickycoaching.com</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-secondary-foreground/70">
                  Ready to train
                </p>
                <h2 className="text-3xl font-semibold">Tell us where you want your game to be.</h2>
                <p className="mt-4 text-secondary-foreground/80">
                  We'll build a plan with clear milestones, on-court reps, and measurable progress.
                </p>
              </div>
              <div className="rounded-2xl bg-secondary-foreground/10 p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-secondary-foreground/70">Email</p>
                    <p className="font-semibold">coaching@vickycoaching.com</p>
                  </div>
                  <div>
                    <p className="text-secondary-foreground/70">Phone</p>
                    <p className="font-semibold">(512) 555-0186</p>
                  </div>
                  <div>
                    <p className="text-secondary-foreground/70">Assessment form</p>
                    <p className="font-semibold">Request via consult button</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="mt-6 w-full border-secondary-foreground/40 text-secondary-foreground"
                >
                  Request a call
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Vicky Tennis Coaching. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Instagram</span>
            <span>Youtube</span>
            <span>USTA SafePlay</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index