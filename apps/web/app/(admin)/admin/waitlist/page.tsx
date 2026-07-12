import { createAdminClient } from '@/lib/supabase/admin'
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'
import { Search, Download, Check, X, Mail } from 'lucide-react'

// Note: In a real production app with full auth, we would use Supabase SSR auth here 
// to verify the current user is an admin. Since this is an early access platform 
// and we are requested not to change existing auth architecture, we will simply 
// assume this route is protected by standard Next.js middleware if configured.

export const metadata = {
  title: 'Waitlist Admin | Glowminal',
}

export const dynamic = 'force-dynamic' // Ensure we always fetch fresh data

export default async function WaitlistAdminPage() {
  const supabase = createAdminClient()

  // Fetch waitlist data
  const { data: waitlist, error } = await supabase
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return <div className="p-8 text-red-500">Failed to load waitlist: {error.message}</div>
  }

  const totalSignups = waitlist?.length || 0
  const websiteSignups = waitlist?.filter(w => w.source === 'website').length || 0
  const otherSignups = totalSignups - websiteSignups

  return (
    <div className="min-h-screen bg-surface font-sans text-text-primary">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-divider bg-surface/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <GlowminalLogo variant="symbol" size={24} />
            <span className="font-medium">Waitlist Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-secondary">{totalSignups} total</span>
            {/* Export CSV (Client-side functionality would be needed in a separate component) */}
            <button className="flex items-center gap-2 rounded-lg border border-divider px-3 py-1.5 text-sm hover:bg-surface-hover transition-colors">
              <Download className="h-4 w-4" /> Export CSV
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-2xl border border-divider p-6 bg-surface-elevated">
            <h3 className="text-sm font-medium text-text-secondary mb-1">Total Waitlist</h3>
            <p className="text-3xl font-light">{totalSignups}</p>
          </div>
          <div className="rounded-2xl border border-divider p-6 bg-surface-elevated">
            <h3 className="text-sm font-medium text-text-secondary mb-1">From Website</h3>
            <p className="text-3xl font-light">{websiteSignups}</p>
          </div>
          <div className="rounded-2xl border border-divider p-6 bg-surface-elevated">
            <h3 className="text-sm font-medium text-text-secondary mb-1">Other Sources</h3>
            <p className="text-3xl font-light">{otherSignups}</p>
          </div>
        </div>

        {/* Filters & Search (Mock UI for now, would need client components for interactivity) */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
            <input 
              type="text"
              placeholder="Search emails..."
              className="w-full rounded-lg border border-divider bg-surface-elevated py-2 pl-9 pr-4 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <div className="flex gap-2 text-sm">
            <button className="rounded-lg bg-surface-elevated px-3 py-1.5 border border-divider">All</button>
            <button className="rounded-lg bg-surface px-3 py-1.5 border border-transparent text-text-secondary hover:bg-surface-elevated">Not Invited</button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-divider bg-surface-elevated overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-divider bg-surface/50 text-text-secondary">
                <tr>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Source</th>
                  <th className="px-6 py-4 font-medium">Signed Up</th>
                  <th className="px-6 py-4 font-medium">Beta Invited</th>
                  <th className="px-6 py-4 font-medium">Launch Email</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-divider">
                {waitlist?.map((entry) => (
                  <tr key={entry.id} className="hover:bg-surface-hover/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{entry.email}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex rounded-full bg-surface border border-divider px-2.5 py-0.5 text-xs">
                        {entry.source}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-secondary text-xs">
                      {new Date(entry.created_at).toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      {entry.beta_invited ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <X className="h-4 w-4 text-text-secondary/30" />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {entry.launch_email_sent ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <X className="h-4 w-4 text-text-secondary/30" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {/* Server actions would be wired up here */}
                      <button className="text-text-secondary hover:text-primary transition-colors p-1" title="Resend Welcome Email">
                        <Mail className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
                {waitlist?.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-text-secondary">
                      No signups yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  )
}
