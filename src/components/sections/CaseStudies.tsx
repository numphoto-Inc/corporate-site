export const CaseStudyCard = ({ caseData }: { caseData: any }) => (
    <div className="group cursor-pointer js-reveal">
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 mb-6">
        {/* ホバーで画像がわずかに拡大するNASU風エフェクト */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${caseData.thumbnailUrl})` }}
        />
        {/* カテゴリータグ：黄色いフラッシュと同じ色をアクセントに */}
        <div className="absolute top-4 left-4 flex gap-2">
          {caseData.categories.map((cat: string) => (
            <span key={cat} className="bg-primary text-[9px] px-2 py-1 tracking-widest font-bold text-stone-900">
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-[10px] tracking-[0.2em] text-stone-400 uppercase">{caseData.clientName}</p>
        <h4 className="text-sm md:text-base font-medium leading-relaxed group-hover:text-stone-500 transition-colors">
          {caseData.title}
        </h4>
      </div>
    </div>
  );