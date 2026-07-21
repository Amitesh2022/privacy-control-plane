import { BackendStatus } from './backend-status';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type Workstream = { id: number; name: string; team: string; progress: number; risk: 'Low' | 'Medium' };

@Component({
  selector: 'app-root',
  imports: [BackendStatus],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly workstreams = signal<Workstream[]>([
    { id: 1, name: 'Consent orchestration', team: 'Security', progress: 82, risk: 'Low' },
    { id: 2, name: 'Regional processing', team: 'Platform', progress: 64, risk: 'Medium' },
    { id: 3, name: 'Purpose enforcement', team: 'Edge', progress: 73, risk: 'Low' },
  ]);
  protected readonly portfolioProgress = computed(() => Math.round(this.workstreams().reduce((sum, item) => sum + item.progress, 0) / this.workstreams().length));
  protected readonly atRisk = computed(() => this.workstreams().filter((item) => item.risk === 'Medium').length);

  protected advance(id: number) {
    this.workstreams.update((items) => items.map((item) => item.id === id ? { ...item, progress: Math.min(100, item.progress + 5), risk: item.progress + 5 >= 75 ? 'Low' : item.risk } : item));
  }
}
