import assert from 'node:assert/strict';
import { createAgentraCountex, userBehaviorMap } from '@x12i/agentra-countex';
const scope = { tenantId: 'fixture-tenant', accountId: 'fixture-account', environment: 'dev' };
const events = [1, 2].map(index => ({ scope, event: { id: 'event-' + index, type: 'report.generated', createdAt: new Date().toISOString() },
  actor: { id: 'fixture-user', type: 'user' }, product: { app: 'example', feature: 'reports' }, classification: { status: 'success' },
}));
const counters = createAgentraCountex([userBehaviorMap]);
await counters.init();
await counters.ingestBatch(events);
await counters.flush();
try {
  const result = await counters.query({ scope: scope.tenantId, counterId: userBehaviorMap.counterId, timeframe: { type: 'all' }, subject: { type: 'user', ids: ['fixture-user'] }, metrics: ['report.generated'], format: 'table' });
  assert(result.rows.some(row => row.count === 2));
  console.log(result);
} finally { await counters.shutdown(); }
