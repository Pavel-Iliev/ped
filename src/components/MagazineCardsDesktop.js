import MagazineCard from './magazineCard/MagazineCard';

function MagazineCardDesktop() {
  return(
    <>
      <div className="magazine-card__wrap">
        <MagazineCard />
        <MagazineCard />
        <MagazineCard />
        <MagazineCard />
      </div>
    </>
  ); 
}

export default MagazineCardDesktop;