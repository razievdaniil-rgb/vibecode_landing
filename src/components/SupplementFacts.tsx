import { supplementFacts as sf } from '../data/content'

/**
 * The signature device: an authentic FDA-style Supplement Facts panel — the one
 * artifact instantly recognizable from this product world. It carries real data,
 * so it earns its place as structure, not decoration.
 */
export function SupplementFacts() {
  return (
    <div className="mx-auto w-full max-w-sm bg-bone font-mono text-graphite-950">
      <div className="border-[3px] border-graphite-950 p-3">
        <h3 className="font-display text-3xl font-black uppercase leading-none tracking-tight">
          Supplement Facts
        </h3>
        <div className="mt-1 border-b border-graphite-950 pb-1 text-[11px]">
          {sf.product}
        </div>
        <div className="flex justify-between border-b border-graphite-950 py-1 text-[11px]">
          <span>Serving Size {sf.servingSize}</span>
        </div>
        <div className="border-b-[6px] border-graphite-950 py-1 text-[11px]">
          Servings Per Container {sf.servingsPerContainer}
        </div>

        <div className="flex justify-end border-b border-graphite-950 py-0.5 text-[10px] font-bold">
          % Daily Value*
        </div>

        {sf.rows.map((r) => {
          const bold = 'bold' in r && r.bold
          const indent = 'indent' in r && r.indent
          return (
            <div
              key={r.name}
              className="flex justify-between border-b border-graphite-950 py-1 text-[12px]"
            >
              <span className={`${bold ? 'font-bold' : ''} ${indent ? 'pl-4' : ''}`}>
                <span className={bold ? 'font-bold' : ''}>{r.name}</span>{' '}
                {r.amount && <span>{r.amount}</span>}
              </span>
              {r.dv && <span className="font-bold">{r.dv}</span>}
            </div>
          )
        })}

        {/* Amino profile block */}
        <div className="mt-2 border-t-[6px] border-graphite-950 pt-1">
          <div className="text-[10px] font-bold uppercase tracking-wide">
            Typical Amino Profile
          </div>
          {sf.aminos.map((a) => (
            <div
              key={a.name}
              className="flex justify-between border-b border-graphite-950/40 py-0.5 text-[11px]"
            >
              <span>{a.name}</span>
              <span>{a.amount}</span>
            </div>
          ))}
        </div>

        <p className="mt-2 text-[9px] leading-tight">
          * Percent Daily Values are based on a 2,000 calorie diet. Values shown for a
          fictional demonstration product.
        </p>
      </div>
    </div>
  )
}
