import React, { useRef, useState } from 'react';
import { HeroBanner } from './HeroBanner';
import { CollectionCardsSection } from './CollectionCardsSection';
import { TrustStrip } from './TrustStrip';
import { HomeCollectionDetailPage } from './HomeCollectionDetailPage';
import { SeasonalCollectionDetailPage } from './SeasonalCollectionDetailPage';

export const HomeCollectionPage: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [showHomeDetail, setShowHomeDetail] = useState(false);
  const [showSeasonalDetail, setShowSeasonalDetail] = useState(false);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showHomeDetail) {
    return <HomeCollectionDetailPage onBack={() => setShowHomeDetail(false)} />;
  }

  if (showSeasonalDetail) {
    return <SeasonalCollectionDetailPage onBack={() => setShowSeasonalDetail(false)} />;
  }

  return (
    <div className="pt-16 sm:pt-[76px]">
      <HeroBanner onExploreCollections={scrollToCards} />
      <div ref={cardsRef}>
        <CollectionCardsSection
          onOpenHomeCollection={() => setShowHomeDetail(true)}
          onOpenSeasonalCollection={() => setShowSeasonalDetail(true)}
        />
      </div>
      <TrustStrip />
    </div>
  );
};
